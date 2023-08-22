import Image from 'next/image'
import NavBar from "@/components/NavBar";

export default function login() {
  
  return (
    <>
    <NavBar />
    <main className= "bg-slate-900 m-20 p-8">
      <h2>
        Login de Funcionários
      </h2>
    </main>
    </>
  )
}
