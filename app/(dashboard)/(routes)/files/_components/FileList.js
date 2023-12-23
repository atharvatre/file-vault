import { Link } from '@react-email/components'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";
import React, { useEffect, useState } from 'react'
import { app } from '../../../../../firebaseConfig';
import { RefreshCcw } from 'lucide-react';

function FileList({ fileList }) {
    const db = getFirestore(app)
    const storage = getStorage()
    //const [files, setFiles] = useState();
    //const desertRef = ref("uploadedFile", file);



    const deleteFile = async (file) => {
        console.log(file)
        await deleteDoc(doc(db, "uploadedFile", file.id))
    }

    return fileList && (
        <div className="overflow-x-auto mt-7">
            <div className=" flex flex-row-reverse items-end">

                <div className=" w-18 items-end hover:shadow-md cursor-pointer hover:text-primary bg-gray-100">
                    <RefreshCcw className='cursor-pointer mr-3 ml-3 ' onClick={() => {
                        window.location.reload()
                    }} />
                    <h4 className='text-sm '>Refresh</h4>
                </div>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Type</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {fileList.map((file, index) => (
                        <tr className="odd:bg-gray-50" key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{file.fileName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{file.fileType}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{(file.fileSize / 1024 / 1024).toFixed(2)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <Link
                                    href={'/file-preview/' + file.id}
                                    className='cursor-pointer'>View</Link>
                            </td>
                            <td className='text-red-500 hover:text-red-700 hover:cursor-pointer hover:underline' onClick={() => deleteFile(file)}>Delete</td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}

export default FileList