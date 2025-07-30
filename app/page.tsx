"use client"
import Wrapper from "./component/Wrapper";

export default function Home() {
  return (

    <Wrapper >
      <div className="flex flex-col space-y-4">
        <h1 className="text-lg font-bold">Mes factures</h1>
        <button className="btn" onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>open modal</button>
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
