import React from 'react'
import { Invoice } from '../types';

interface Props {
    invoice: Invoice;
    setInvoice: (invoice: Invoice) => void;
}

const InvoiceLines : React.FC<Props> = ({ invoice, setInvoice }) =>  {
  return (
    <div>InvoiceLines</div>
  )
}

export default InvoiceLines