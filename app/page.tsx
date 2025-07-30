"use client"
import { Layers } from "lucide-react";
import Wrapper from "./component/Wrapper";
import { useEffect, useState } from "react";

export default function Home() {

  const [invoiceName, setInvoiceName] = useState("");
  const [isNameValide, setIsNameValide] = useState(false);
  useEffect(()=>{
    setIsNameValide(invoiceName.length <= 40);
  },[invoiceName])

  return (
    <Wrapper >
      <div className="flex flex-col space-y-4">
        <h1 className="text-lg font-bold">Mes factures</h1>

        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="cursor-pointer border border-accent rounded-xl flex flex-col justify-center items-center p-4 "
            onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>
            <div className="font-bold text-accent">Créer une facture</div>
            <div className='bg-accent-content text-accent rounded-full p-2 m-2'>
              <Layers className='w-6 h-6' />
            </div>
          </div>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Nouvelle facture</h3>
            <input 
              type="text" 
              placeholder="Nom de la facture (max 40 caractères)" 
              className="input input-bordered w-full my-4"
              value = {invoiceName}
              onChange={(e)=>setInvoiceName(e.target.value)}
            />
            {!isNameValide && <p className="mb-4 text-sm">Le nom ne peut pas dépasser 40 caractères</p>}
            <button 
              className="btn btn-accent w-full"
              disabled = {!isNameValide || invoiceName.length === 0}
            >
              Créer
            </button>
          </div> 
        </dialog>

      </div>
    </Wrapper>
  );
}
