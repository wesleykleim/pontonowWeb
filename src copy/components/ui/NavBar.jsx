"use client"

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function NavBar({ active }) {
    const {user, logout} = useContext(AuthContext)
    return (
        <nav className="flex justify-between items-center bg-slate-900 px-6 py-4">
            <ul className="flex gap-20 items-end">
@@ -29,8 +36,14 @@ export default function NavBar({ active }) {

            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden" >
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            <div className="flex items-center gap-2">
                {user?.nome}
                <div className="h-12 w-12 rounded-full overflow-hidden" >
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button onClick={logout} variant="secondary" element="button" icon={<ArrowLeftOnRectangleIcon className="h-4 w-4" />}>
                    sair
                </Button>
            </div>

        </nav>
    )
}