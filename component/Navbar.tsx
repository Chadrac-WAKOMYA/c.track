"use client"
import { checkAndAddUser } from '@/app/action';
import { UserButton, useUser } from '@clerk/nextjs';
import { Layers } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

export default function Navbar({}: Props) {
    
    const pathName = usePathname();
    const {user} = useUser();
    
    const navLinks = [
        {href:"/", label: "Factures"},
    ]

    useEffect(() => {
        if(user?.primaryEmailAddress?.emailAddress && user.fullName){
            checkAndAddUser(user.primaryEmailAddress.emailAddress, user.fullName);
        }
    }, [user]);

    const isActiveLink = (href: string) => pathName.replace(/\/$/, '') === href.replace(/\/$/, '');

    const renderLinks = (classNames:string) => 
        navLinks.map(({href, label})=>{
            return <Link href={href} key={href} className={`btn-sm ${classNames} ${isActiveLink(href)?'btn-accent':''}`}>{label}</Link>
        })
    

    return (
        <div className='border-b border-base-300 px-5 md:px-[5%] py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    <div className='bg-accent-content text-accent rounded-full p-2'>
                        <Layers className='w-6 h-6'/>
                    </div>
                    <span className='ml-2 font-bold text-2xl'>c.<span className='text-accent'>Fact</span></span>
                </div>
                <div className='flex items-center space-x-2'>
                    {renderLinks('btn')}
                    <UserButton/>
                </div>
            </div>
            <div></div>
        </div>
    )
}