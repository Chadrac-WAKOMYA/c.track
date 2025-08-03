import React from 'react'
import { Invoice } from '../types'

interface Props  {
    invoice : Invoice | null;
    setInvoice: (invoice: Invoice) => void;
}

const InvoiceInfo : React.FC<Props> = ({invoice, setInvoice}) => {
  return (
    <div className='flex flex-col h-fit bg-base-200 p-5 rounded-xl mb-4 md:mb-0'>
        <div className='space-y-4'><h2>Emetteur</h2></div>
    </div>
  )
}

export default InvoiceInfo