import React from 'react'

function ProgressBar({ progress = 30 }) {
    return (
        <div className='bg-gray-400 w-full h-4 mt-3 rounded-full'>
            <div className=" bg-primary rounded-full h-4 text-[10px] text-white" style={{ width: `${progress}%` }}>

                {`${Number(progress).toFixed(2)}%`}
            </div>
        </div>
    )
}

export default ProgressBar