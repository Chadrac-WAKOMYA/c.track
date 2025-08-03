import React from 'react'
import { Invoice } from '../types'

interface Props  {
    invoice : Invoice
    setInvoice: (invoice: Invoice) => void;
}

const InvoiceInfo = () => {
  return (
    <div>InvoiceInfo</div>
  )
}

export default InvoiceInfo