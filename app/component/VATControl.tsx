import React from 'react'
import { Invoice } from '../types';

interface Props {
    invoice: Invoice;
    setInvoice: (invoice: Invoice) => void;
}

const VATControl: React.FC<Props> = ({ invoice, setInvoice }) => {

    const handleVATChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setInvoice({
            ...invoice,
            vatActive: isChecked,
            vatRate: isChecked ? invoice.vatRate : 0, // Reset VAT rate if unchecked
        });
    }

    const handleVATRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRate = parseFloat(e.target.value);
        if (!isNaN(newRate)) {
            setInvoice({
                ...invoice,
                vatRate: newRate,
            });
        }
    }

    return (
        <div className='flex items-center'>
            <label className="block text-sm font-bold">TVA (%)</label>
            <input
                type="checkbox"
                className='toggle toggle-sm ml-2'
                checked={invoice.vatActive}
                onChange={handleVATChange}
            />
            {invoice.vatActive && (
                <input
                    type='number'
                    className='input input-sm input-bordered w-16 ml-2'
                />
            )}
        </div>
    )
}

export default VATControl