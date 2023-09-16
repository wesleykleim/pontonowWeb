import Button from "@/components/Button";
import NaveBar from "@/components/NavBar";
import TestImput from "@/components/TextImput";
import { CreditCardIcon } from 'lucide-react';

export default function FormCadastro(){
    const [messagem, setMessage] = useState("")}
    async function hardleSubmit(FormData){
        const resp = await create(FormData)
        if (resp.error){
            setMessage(resp.error)
            return
        }
        setMenssage("conta cadastrada com Sucesso")
    }
    
    return(
        <>
        <NaveBar active ={"cadastro"}/>

        <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
            <h2 className="text-xl text-slate-100">Cadastrar Funcionario</h2>

            <form action={create}>
                <TextInput name="nome" id="nome" label="nome"/>
                <TextInput name="cpf"id="cpf" label="cpf"/>
                <TextInput name="sexo"id="sexo" label="sexo"/>
                <TextInput name="cargo"id="cargo" label="cargo"/>

                <div className="flex justify-around">
                    <Button variant="secundary">Salvar</Button>
                    <Button>Cancelar</Button>
                </div>
            </form>
        </main>
        </>
    )
