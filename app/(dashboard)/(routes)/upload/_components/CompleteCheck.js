import Image from 'next/image'
import React from 'react'

function CompleteCheck() {
    return (
        <div className='flex 
    flex-col 
    text-center
    items-center
    justify-center mt-20
 '>
            <Image src='/verified.gif'
                width={200} height={200} alt='verified'
            />
            <h2 className='text-[20px]'>File
                <strong className='text-primary'> Uploaded</strong> Successfully</h2>
        </div>
    )
}

export default CompleteCheck