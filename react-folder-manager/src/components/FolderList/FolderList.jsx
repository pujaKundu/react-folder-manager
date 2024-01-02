import React from 'react'
import { Link } from 'react-router-dom'

const FolderList = ({folderList}) => {
   
    return (
    <div className='grid grid-cols-3 mt-5'>
            {folderList.map((folder) => (   
                <Link to={`/folder/${folder?.id}`}
                className='bg-indigo-400 mt-5 p-5 w-40 h-24 flex items-center justify-center rounded hover:bg-indigo-500 mt-5 cursor-pointer shadow-lg'
                >
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        <p className='text-slate-100 mt-1 font-semibold'>{folder?.folderName}</p>

                    </div>
                   
                </Link>
            ))}
    </div>
  )
}

export default FolderList;
