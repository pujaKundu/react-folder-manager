import React, { useState } from 'react'
import FolderList from '../../components/FolderList/FolderList'

const Homepage = ({allFolders}) => {

    const [folderName,setFolderName]=useState('')
    const [folderList,setFolderList]=useState(allFolders)
    
    console.log(folderList)
    // console.log(folderName)
    const handleCreateFolder=()=>{
        // creating an object represnting a new folder
        const newFolder ={
            id:Math.floor(Math.random() * 100),
            folderName: folderName
        }
        setFolderList([...folderList, newFolder])
        setFolderName('')
    }

    return (
        <div>
            <h1 className='text-3xl mb-5 font-semibold text-slate-700'>Folder Manager</h1>
            <div className='flex justify-center items-center'>
                
                    <input type="text" className='border border-1 w-80 p-3 mt-2 rounded shadow-md'placeholder='Enter Folder Name' required
                    value={folderName}
                    onChange={(e)=>setFolderName(e.target.value)}
                    />
               
            <button className='ml-3 mt-2 bg-green-400 cursor-pointer flex '
                onClick={handleCreateFolder}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>
                
                Create Folder
                </button>
            </div>
            {/* show folders */}
            {/* <p>{folderList.length}</p> */}
            
            <FolderList folderList={folderList}/>
            
        </div>
    )
}

export default Homepage;