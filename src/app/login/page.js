import Image from 'next/image'
import NavBar from "@/components/NavBar";
import { BeakerIcon } from '@heroicons/react/24/solid'
import DropMenu from '@/components/DropMenu';

export default function login() {

  return (
    <>
      <NavBar />
      <main className="bg-slate-900 m-20 p-10">
        <h1>Login de Funcionários</h1>
          <div id="data-row" className="flex justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer rounded ">
            <div className="flex items-center justify-between mb-5" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd" />
              </svg>
              <span>Login</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
              <span className="text-blue-500 cursor-pointer">Senha</span>
              <div className="text-slate-300">
                <DropMenu className="text-slate-300" />
              </div>
            </div>
          </div >

        
        <div>
          <div id="data">

            <div flex items-center>
              <BeakerIcon className="h-6 w-6 text-blue-500" />
              <span className="text-aling-center text-blue-500 cursor-pointer">Esqueci a senha
              </span>

            </div>
          </div>

        </div>

      </main>
    </>
  )
}
