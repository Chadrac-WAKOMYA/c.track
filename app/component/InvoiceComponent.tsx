import React from 'react'
import { Invoice } from '../types'
import Link from 'next/link';
import { CheckCircle, Clock, FileText, SquareArrowOutUpRight, XCircle } from 'lucide-react';

type InvoiceComponentProps = {
    invoice: Invoice;
    index: number;
}

const getStatusBadge = (status: number) => {
    switch(status) {
        case 1:
            return (
                <div className='badge badge-lg flex items-center gap-2'>
                    <FileText className='w-4' />
                    Brouillon
                </div>
            ) 
        case 2:
            return (
                <div className='badge badge-lg badge-info  flex items-center gap-2'>
                    <Clock className='w-4' />
                    En attente
                </div>
            ) 
        case 3:
            return (
                <div className='badge badge-lg badge-success flex items-center gap-2'>
                    <CheckCircle className='w-4' />
                    Payée
                </div>
            ) 
        case 4:
            return (
                <div className='badge badge-lg badge-warning flex items-center gap-2'>
                    <XCircle className='w-4' />
                    Annulée
                </div>
            ) 
        case 5:
            return (
                <div className='badge badge-lg badge-error flex items-center gap-2'>
                    <XCircle className='w-4' />
                    Impayée
                </div>
            )
        default: 
            return (
                <div className='badge badge-lg '>
                    <XCircle className='w-4' />
                    Indéfinis
                </div>
            )
    }
}

const InvoiceComponent: React.FC<InvoiceComponentProps> = ({ invoice, index }) => {

    const calculateTotal = () => {
        const totalHT = invoice.lines.reduce((acc, line) => acc + (line.quantity * line.unitPrice), 0);
        const totalVAT = invoice.vatActive ? totalHT * (invoice.vatRate / 100) : 0;
        return totalHT + totalVAT;
    }

    return (
        <div className='bg-base-200/90 p-5 rounded-xl space-y-2 shadow'>
            <div className='flex justify-between items-center w-full'>
                {getStatusBadge(invoice.status)}
                <Link
                    className='btn btn-sm btn-accent'
                    href={`/invoice/${invoice.id}`}
                >Plus<SquareArrowOutUpRight className='w-4' /></Link>
            </div>
            <div className='w-full'>
                <div className=''>
                    <div className='stat-title'>
                        <div className='uppercase text-sm'>fact-{invoice.id}</div>
                    </div>
                    <div className='stat-value'>
                        <div>{calculateTotal()} $</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceComponent