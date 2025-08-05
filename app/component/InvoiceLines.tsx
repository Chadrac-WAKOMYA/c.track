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
                                    <td>
                                        <input
                                            type="number"
                                            className='input input-sm input-bordered w-full'
                                            value={line.quantity}
                                            min={0}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className='input input-sm input-bordered w-full'
                                            value={line.description}
                                            min={0}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            className='input input-sm input-bordered w-full'
                                            value={line.unitPrice}
                                            min={0}
                                            step={0.01}
                                        />
                                    </td>
                                    <td className='font-bold'>
                                        {(line.quantity * line.unitPrice).toFixed(2)}
                                    </td>
                                    
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