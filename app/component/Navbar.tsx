"use client"
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

export default function d({}: Props) {
    
    const pathName = usePathname();
    
    const navLinks = [
        {href:"/", label: "Factures"},
    ]

    const isActiveLink = (href: string) => pathName.replace(/\/$/, '') === href.replace(/\/$/, '');

    const renderLinks = (classNames:string) => 
        navLinks.map(({href, label})=>{
            return <Link href={href} key={href} className={`btn-sm ${classNames} ${isActiveLink(href)?'btn-accent':''}`}>{label}</Link>
        })
    

    return (
        <div className='border-b border-base-300 px-5 md:px-[10%] py-4 relative'>
            <div>
                <div >
                    {renderLinks('btn')}
                    <UserButton/>
                </div>
            </div>
            <div></div>
        </div>
    )
}