import Image from 'next/image'
import NavBar from "@/components/NavBar";
import Button from '@/components/Button';
import { CreditCardIcon } from 'lucide-react';


  const data = [
    {
      "id": 1,
      "nome": 'Jorge Rodrigo',
      "cpf": '123.456.78-90',
      "sexo": 'M',
      "cargo": 'gerente_ti'

    },
    {
      "id": 2,
      "nome": 'Wesley Kleim',
      "cpf": '123.456.78-90',
      "sexo": 'M',
      "cargo": 'suporte_ti',

    }
  ]

  async function getContas() {
    const url = "http://localhost:8080/api/cadastrar"
    const response = await fetch(url, { next: { revalidate: 3600 } })
    return respons.json()
  }

  export default function cadastro() {


  return (
    <>
      <NavBar />

      <main className="bg-slate-900 m-20 p-8">
        <div className="flex justify-between items-center">
          <h2 className=" text-xl text-slate-100">
            Cadastro de Funcionários
          </h2>
          <Button icon={<CreditCardIcon className="h-6 w-6 "/>} href="/cadastro/new">
            Criar Cadastro
          </Button>
        </div>
      </main>
    </>
  )
}
