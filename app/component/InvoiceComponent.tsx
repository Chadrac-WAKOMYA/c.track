import React from 'react'
import { Invoice } from '../types'

type InvoiceComponentProps = {
    invoice : Invoice;
    index : number;
}

const InvoiceComponent :React.FC<InvoiceComponentProps>= ({invoice, index}) => {
  return (
    <div>InvoiceComponent</div>
  )
}

export default InvoiceComponent