import { getInvoiceById } from '@/app/action';
import React from 'react'


const page = ({params}:{params:Promise<{invoiceId:string}>}) => {
    const fetchInvoice = async () => {
        try {
            const { invoiceId } = await params;
            const fetchedInvoice = await getInvoiceById(invoiceId);
        } catch (error) {
            console.error("Error fetching invoice:", error);        
        }
    }

  return (
    <div>page</div>
  )
}

export default page