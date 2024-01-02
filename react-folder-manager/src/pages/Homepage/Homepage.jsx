import React, { useState } from 'react'
import FolderList from '../../components/FolderList/FolderList'

const Homepage = () => {

    const [folderName,setFolderName]=useState('')
    const [folderList,setFolderList]=useState([])
    // console.log(folderList)
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
        <div className=''>
            <h1 className='text-3xl mb-5'>Folder Manager</h1>
            <div className='flex-col justify-center items-center'>
                <div> 
                    <input type="text" className='border border-1 w-72 p-3 mt-2'placeholder='Enter Folder Name'
                    value={folderName}
                    onChange={(e)=>setFolderName(e.target.value)}
                    />
                </div>
            <button className='mt-5 bg-green-400 cursor-pointer'
                onClick={handleCreateFolder}
            >Create Folder</button>
            </div>
            {/* show folders */}
            {/* <p>{folderList.length}</p> */}
            
            <FolderList folderList={folderList}/>
            
        </div>
    )
}

export default Homepage;