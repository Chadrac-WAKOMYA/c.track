import { getInvoiceById } from '@/app/action';
import { Invoice } from '@/app/types';
import React, { useState } from 'react'

const page = ({params}:{params:Promise<{invoiceId:string}>}) => {
    const [invoice, setInvoice] = useState<Invoice | null>(null);
    const [initialInvoice, setInitialInvoice] = useState<Invoice | null>(null);
    const fetchInvoice = async () => {
        try {
            const { invoiceId } = await params;
            const fetchedInvoice = await getInvoiceById(invoiceId);
            if (fetchedInvoice) {
                setInvoice(fetchedInvoice);
                setInitialInvoice(fetchedInvoice);
            } else {
                setInvoice(null);
                setInitialInvoice(null);
            }
        } catch (error) {
            console.error("Error fetching invoice:", error);        
        }
    }

  return (
    <div>page</div>
  )
}

export default page