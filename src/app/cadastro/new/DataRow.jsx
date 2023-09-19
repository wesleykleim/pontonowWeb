import DropMenu  from "@/components/ui/DropMenu";
import { CreditCardIcon } from "lucide-react";

export default function DataRow({cadastro}){
    <div id ="data-row" className="flex justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer rounded">
        <div className= "flex gap-1">
            <CreditCardIcon className="h-6 w-6"/>
            <span>{cadastro.nome} </span>

        </div>
        <span> Nome Completo</span>
        <div className="text-slate-300"  >
            <DropMenu conta={conta} />
        </div>
    </div>

    
}