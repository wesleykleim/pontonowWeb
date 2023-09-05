import NaveBar from "@/components/NavBar";
import TestImput from "@/components/TextImput";

export default function FormCadastro(){
    return(
        <>
        <NaveBar active ={"cadastro"}/>

        <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
            <h2 className="text-xl text-slate-100">Cadastrar Funcionario</h2>

            <form action="">
                <TextInput/>
            </form>
        </main>
        </>
    )
}