"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { destroy } from '@/actions/contas';
import toast from 'react-hot-toast';
import {useRouter} from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function DropMenu({cadastro}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = () => {
    router.push("/cadastro/"+ cadastro.id +"/edit")
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    const response = await destroy(cadastro.id)

    if (response?.error){
      toast.error(response.error, { style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
      }})
    }else{
      toast.success("Conta apagada com sucesso", { style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
      }})
    }
    setAnchorEl(null);
  }

  return (
    <div>
      <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem>apagar</MenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza que quer apagar essa conta?</AlertDialogTitle>
              <AlertDialogDescription>
                Ao apagar a conta, todos os dados serão perdidos. Essa ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>sim, pode apagar essa conta</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <MenuItem onClick={handleEdit}>editar</MenuItem>
      
    </div>
  );
}
