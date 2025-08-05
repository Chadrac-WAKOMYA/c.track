import React from 'react'
import { Invoice } from '../types';
import { Plus } from 'lucide-react';

interface Props {
    invoice: Invoice;
    setInvoice: (invoice: Invoice) => void;
}

const InvoiceLines : React.FC<Props> = ({ invoice, setInvoice }) =>  {
  return (
    <div className='h-fit bg-base-200 p-5 rounded-xl w-full md:ml-4'>
        <div className='flex justify-between items-center mb-4'>
            <h2 className='badge badge-accent'>Produits / Services</h2>
            <button className='btn btn-sm btn-accent rounded-xl'><Plus className='w-4'/></button>
        </div>

    </div>
  )
}

export default InvoiceLines