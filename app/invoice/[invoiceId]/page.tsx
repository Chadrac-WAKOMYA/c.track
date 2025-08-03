"use client";
import { getInvoiceById } from '@/app/action';
import InvoiceInfo from '@/app/component/InvoiceInfo';
import VATControl from '@/app/component/VATControl';
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

  if(!invoice) {return <div className='flex justify-center items-center'>Facture non trouvée</div>}

  return (
    <Wrapper>
      <div>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
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
            <button className='btn btn-sm btn-accent ml-4'><Trash className='w-4' /></button>
          </div>
        </div>

        <div>
          <div className='flex w-full md:w-1/3 flex-col'>
            <div className='mb-4 bg-base-200 rounded-xl p-5'>
              <div>
                <div className='badge badge-accent'>Résumé de totaux</div>
                <VATControl invoice={invoice} setInvoice={setInvoice}/>
              </div>
            </div>
            <InvoiceInfo invoice={invoice} setInvoice={setInvoice}/>
          </div>
          <div className='flex w-full md:w-1/3 flex-col'></div>
        </div>
      </div>
    </Wrapper>

  )
}

export default page