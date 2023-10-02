import { CreditCardIcon } from "@heroicons/react/24/outline";

import { Monomaniac_One } from "next/font/google"

const mono = Monomaniac_One({
    weight: '400',
    subsets: ['latin']
})

return(
    <div className="flex flex-col gap-3 bg-slate-900 max-w-sm rounded p-3">
        <div className="flex items-center gap-3">
            <CreditCardIcon className="h-8 w-8 text-slate-400" />
            <span className="text-xl">{cadastro.nome}</span>
        </div>
        <span className={`${mono.className} text-5xl text-white`}>nome: {nome}</span>
        <div className="flex justify-between">
            <span className="text-emerald-400">endereço: {endereço}</span>
            <span className="text-rose-600">contato: {contato}</span>
        </div>
    </div>
)
