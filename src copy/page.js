import Link from "next/link";


export default function NavBar() {
  return (

    <nav className="flex justify-between items-center bg-slate-900 px-6 py-4">
      <ul className="flex gap-20 items-end">
        <li>
          <Link href="/"><h1 className='text-2xl text-slate-100' >Ponto Now</h1></Link></li>
        <li>
          <Link href="/login">login</Link></li>
        <li>
          <Link href="/cadastro">Cadastro de Funcionários</Link></li>
        <li>
          <Link href="/bancoH">Banco de Horas</Link></li>
      </ul>

      <div className='h-12 w-12 rounded-full overflow-hidden '>
        <img src="https://i.pravatar.cc/100" alt="Avatar"></img>
      </div>
    </nav>
  )
}