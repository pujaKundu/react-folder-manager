import React, { useState } from 'react'

const Homepage = () => {
    const [folderName,setFolderName]=useState('')
    const [folderList,setFolderList]=useState([])
    // console.log(folderName)
    const handleCreateFolder=()=>{
        // creating an object represnting a new folder
        const newFolder ={
            name: folderName
        }
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
                // onClick={}
                >Create Folder</button>
            </div>
        </div>
    )
}

export default Homepage;