import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function Button ({children}){
    return(
        <a href="" className="flex items-center gap-2 bg-pink-600 py-1 px-4 rouded hover:bg-pink-800">
            <CreditCardIcon className="h-6 w-6"/>
            {children}
        </a>
    )
}