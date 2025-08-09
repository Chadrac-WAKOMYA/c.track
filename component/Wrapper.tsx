import React from 'react'
import Navbar from './Navbar';

type Props = {
    children?: React.ReactNode;
}

export default function Wrapper({children}: Props) {
    return (
        <div>
            <Navbar />
            <div className='px-5 md:px-[10%] mt-8 mb-10'>
                {children}
            </div>
        </div>
    )
}