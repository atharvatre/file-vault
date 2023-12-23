import { XCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FilePreview({ file, removeFile }) {
    return (
        <div className='flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-400'>
            <div className='flex items-center p-2'>
                <Image src='/file.png' width={50} height={50} alt='file' />
                <div className='text-left mt-2' >
                    <h2>File Name: {file.name}</h2>
                    <h2>File Type: {file?.type}</h2>
                    <h2 className='text-[12px] text-gray-400'>File Size: {(file.size / 1024 / 1024).toFixed(2)}MB</h2>
                </div>
            </div>
            <XCircle className='hover:text-red-700 cursor-pointer' onClick={() => removeFile()} />
        </div>
    )
}

export default FilePreview