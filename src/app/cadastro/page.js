import Image from 'next/image'
import NavBar from "@/components/NavBar";
export default function cadastro() {

  const data =[
  {
    "id": 1,
    "nome": 'Jorge Rodrigo',
    "cpf": '123.456.78-90',
    "sexo": 'M',
    "cargo": 'gerente_ti'
    
  },
  {
    "id": 2,
    "nome": 'Wesley Kleim',
    "cpf": '123.456.78-90',
    "sexo": 'M',
    "cargo": 'suporte_ti',
    
  }
  ]

  async function getContas(){
    const url = "http://localhost:8080/api/cadastrar"
    const response = await fetch(url, {next:{ revalidate: 0 }})
    return respons.json()
  }



  return (
    <>
      <NavBar />

      <main className="bg-slate-900 m-20 p-8">
        <h2>
          Cadastro de Funcionários
        </h2>
      </main>
    </>
  )
}
