"use client";
import { getInvoiceById } from '@/app/action';
import Wrapper from '@/app/component/Wrapper';
import { Invoice } from '@/app/types';
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
          <p><span>Facture-</span>{invoice?.id}</p>
        </div>
        <div></div>
      </div>
    </Wrapper>

  )
}

export default page