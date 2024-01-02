import React from 'react'
import { Link } from 'react-router-dom'

const FolderList = ({folderList}) => {
   
    return (
    <div className='flex'>
            {folderList.map((folder) => (   
                <Link to={`/folder/${folder?.id}`}
                className='bg-gray-100 m-2 p-5 w-24 h-24 flex items-center justify-center rounded hover:bg-gray-200 mt-5 cursor-pointer'
                >
                    <p >{folder?.folderName}</p>
                </Link>
            ))}
    </div>
  )
}

export default FolderList;
