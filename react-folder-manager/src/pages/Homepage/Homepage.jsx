import React, { useState } from 'react'

const Homepage = () => {

    const [folderName,setFolderName]=useState('')
    const [folderList,setFolderList]=useState([])
    console.log(folderList)
    // console.log(folderName)
    const handleCreateFolder=()=>{
        // creating an object represnting a new folder
        const newFolder ={
            folderName: folderName
        }
        setFolderList([...folderList, newFolder])
        setFolderName('')
    }

    return (
        <div className=''>
            <h1>Folder Manager</h1>
            <div className='flex-col justify-center items-center'>
                <div>
                    <p>Enter folder name</p>
                    <input type="text" className='border border-1'
                    value={folderName}
                    onChange={(e)=>setFolderName(e.target.value)}
                    />
                </div>
                <button className='mt-5 bg-green-300 cursor-pointer'
                 onClick={handleCreateFolder}
                >Create Folder</button>
            </div>
            {/* show folders */}
            <p>{folderList.length}</p>
        </div>
    )
}

export default Homepage;