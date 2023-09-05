import Button from "@/components/Button";
import NaveBar from "@/components/NavBar";
import TestImput from "@/components/TextImput";
import { CreditCardIcon } from 'lucide-react';

export default function FormCadastro(){
    return(
        <>
        <NaveBar active ={"cadastro"}/>

        <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
            <h2 className="text-xl text-slate-100">Cadastrar Funcionario</h2>

            <form action={create}>
                <TextInput id="nome" label="nome"/>
                <TextInput id="cpf" label="cpf"/>
                <TextInput id="sexo" label="sexo"/>
                <TextInput id="cargo" label="cargo"/>

                <div className="flex justify-around">
                    <Button variant="secundary">Salvar</Button>
                    <Button>Cancelar</Button>
                </div>
            </form>
        </main>
        </>
    )
}