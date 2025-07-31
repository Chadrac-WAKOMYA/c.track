import React from 'react'
import { Invoice } from '../types'
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

type InvoiceComponentProps = {
    invoice: Invoice;
    index: number;
}

const InvoiceComponent: React.FC<InvoiceComponentProps> = ({ invoice, index }) => {
    return (
        <div className='bg-base-200/90 p-5 rounded-xl space-y-2 shadow'>
            <div className='flex justify-between items-center w-full'>
                <div>Status</div>
                <Link
                    className='btn btn-sm btn-accent'
                    href={`/invoice/${invoice.id}`}
                >Plus<SquareArrowOutUpRight className='w-4' /></Link>
            </div>
            <div></div>
        </div>
    )
}

export default InvoiceComponent