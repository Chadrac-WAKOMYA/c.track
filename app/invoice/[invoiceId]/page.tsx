"use client";
import { getInvoiceById } from '@/app/action';
import Wrapper from '@/app/component/Wrapper';
import { Invoice } from '@/app/types';
import { Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: Promise<{ invoiceId: string }> }) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [initialInvoice, setInitialInvoice] = useState<Invoice | null>(null);
  const fetchInvoice = async () => {
    try {
      const { invoiceId } = await params;
      const fetchedInvoice = await getInvoiceById(invoiceId);
      if (fetchedInvoice) {
        setInvoice(fetchedInvoice);
        setInitialInvoice(fetchedInvoice);
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  }

  useEffect(() => {
    fetchInvoice();
  }, []);

  return (
    <Wrapper>
      <div>
        <div>
          <p className='badge badge-ghost badge-lg uppercase'>
            <span>Facture -</span>{invoice?.id}
          </p>
          <div className='flex md:mt-0 mt-4 '>
            <select
              className='select select-sm select-bordered w-full'
              name=""
              id=""
              value={invoice?.status}
            >
              <option value={1}>Brouillon</option>
              <option value={2}>En attente</option>
              <option value={3}>Payée</option>
              <option value={4}>Annulée</option>
              <option value={5}>Impayée</option>
            </select>
            <button className='btn btn-sm btn-accent ml-4'>Sauvegarder</button>
            <button><Trash className='w-4 ml-3 cursor-pointer' /></button>
          </div>
        </div>

        <div className='flex mt-4 items-center'>

        </div>
      </div>
    </Wrapper>

  )
}

export default page