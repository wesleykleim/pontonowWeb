import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getCadastro } from "@/actions/cadaastro";

export default async function Cadastro() {
  const data = await getCadastro()


  return (
    <>
      <NavBar active={"cadastro"} />
      <main className="bg-slate-900 m-20 p-8 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-slate-100">Contas</h2>
          <Button icon={<CreditCardIcon className="h-6 w-6" />} href="/cadastro/new">
            criar conta
          </Button>
        </div>
        <div>
          <div id="data" className="text-slate-300">
            {data.map(conta => {
              return <DataRow conta={cadastro} />
            })}
            
          </div>
        </div>
      </main>
    </>
}