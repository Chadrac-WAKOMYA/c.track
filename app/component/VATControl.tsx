import React from 'react'
import { Invoice } from '../types';

interface Props  {
    invoice : Invoice;
    setInvoice: (invoice: Invoice) => void;
}

const VATControl: React.FC<Props> = ({invoice, setInvoice}) => {
  return (
    // <div className='flex items-center'>
    //     <label className="block text-sm font-bold">TVA (%)</label>
    // </div>
    <></>
  )
}

export default VATControl