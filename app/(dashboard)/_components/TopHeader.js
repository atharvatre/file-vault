import { UserButton } from '@clerk/nextjs'
import { AlignJustify, AlignLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({ setToggleBar }) {
    return (
        <div className='flex p-5 border-b items-center justify-between md:justify-end'>
            <AlignLeft className='md:hidden hover:cursor-pointer hover:text-primary' onClick={() => setToggleBar(true)} />

            <Image src='/logo.svg' width={50} height={40} className='md:hidden cursor-pointer' />
            <UserButton />
        </div>
    )
}

export default TopHeader