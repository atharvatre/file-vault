"use client"
import { ChevronLeft, File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SideNav({ closeSideBar }) {
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: '/files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },

    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b relative'>
                <Link href={process.env.NEXT_PUBLIC_DOMAIN}>

                    <Image src='/logo.svg' width={50} height={40} alt='logo' />
                </Link>
                <ChevronLeft className='md:hidden absolute top-7  right-4 hover:cursor-pointer hover:text-primary' onClick={() => closeSideBar()} />
                {/* <span className='ml-10 text-center mt-1 text-xl'>FileVault</span> */}
            </div>
            <div className="flex flex-col float-left w-full">
                {menuList.map((item, index) => (
                    <Link href={item.path} key={index}>
                        < button className={`flex gap-2 p-4 px-6
                hover:bg-gray-100 w-full
                text-gray-500
                ${activeIndex == index ? 'bg-blue-50 text-primary' : null}`}
                            onClick={() => { setActiveIndex(index); closeSideBar() }}>
                            <item.icon />
                            <h2>{item.name}</h2>
                        </button>
                    </Link>
                ))}
            </div>

        </div >
    )
}

export default SideNav