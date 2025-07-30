"use client"
import { Layers } from "lucide-react";
import Wrapper from "./component/Wrapper";

export default function Home() {
  return (

    <Wrapper >
      <div className="flex flex-col space-y-4">
        <h1 className="text-lg font-bold">Mes factures</h1>

        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="cursor-pointer border border-accent rounded-xl flex flex-col justify-center "
            onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>
            <div className="font-bold text-accent">Créer une facture</div>
            <div className='bg-accent-content text-accent rounded-full p-2 mt-2'>
              <Layers className='w-6 h-6' />
            </div>
          </div>
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </div>
    </Wrapper>
  );
}
