import Image from 'next/image'

export default function Home() {
  
  return (
    <>
    <nav className="flex justify-between items-center bg-slate-900 px-6 py-4">
        <ul className="flex gap-20 items-end">
          <li><a href="#"><h1 className='text-2xl text-slate-100' >Ponto Now</h1></a></li>
          <li><a href="#"><h1>Home</h1>    </a></li>
          <li><a href="#"><h1>Cadastro Funcionários </h1>     </a></li>
          <li><a href="#"><h1>Banco de Horas </h1>     </a></li>
        </ul>
        <div className='h-12 w-12 rounded-full overflow-hidden '>
          <img src="https://i.pravatar.cc/100"  alt="Avatar"></img>

        </div>
    </nav>
   
    <main className= "bg-slate-900 m-20 p-8">
      <h2>
        Ponto
      </h2>
    </main>
    </>
  )
}
