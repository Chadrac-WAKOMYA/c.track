import React from 'react'
import { Invoice } from '../types';
import { Plus } from 'lucide-react';

interface Props {
    invoice: Invoice;
    setInvoice: (invoice: Invoice) => void;
}

const InvoiceLines: React.FC<Props> = ({ invoice, setInvoice }) => {
    return (
        <div className='h-fit bg-base-200 p-5 rounded-xl w-full md:ml-4'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='badge badge-accent'>Produits / Services</h2>
                <button className='btn btn-sm btn-accent rounded-xl'><Plus className='w-4' /></button>
            </div>
            <div className='scrollable'>
                <table className='table w-full'>
                    <thead className='uppercase'>
                        <th>Quantité</th>
                        <th>Description</th>
                        <th>Prix Unitaire (HT)</th>
                        <th>Montant (HT)</th>
                    </thead>
                    <tbody>
                        {
                            invoice.lines.map((line, index) => (
                                <tr key={index}>
                                    <td>{line.quantity}</td>
                                    <td>{line.description}</td>
                                    <td>{line.unitPrice.toFixed(2)} $</td>
                                    <td>{(line.quantity * line.unitPrice).toFixed(2)} $</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default InvoiceLines