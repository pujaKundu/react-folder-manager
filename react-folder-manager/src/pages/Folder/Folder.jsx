import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import FolderList from '../../components/FolderList/FolderList';

const Folder = ({allFolders}) => {
    let {folderId}=useParams();
    
    const [folderList,setFolderList]=useState(allFolders);
    const [folderName,setFolderName]=useState('New Sub Folder')
    
    // console.log(folderList)
    // console.log(folderName)
    const handleCreateFolder=()=>{
        // creating an object represnting a new folder
        const newFolder ={
            id:Math.floor(Math.random() * 100),
            folderName: folderName
        }
        setFolderList([...folderList, newFolder])
        
    }
    return (
    <div>
      this is folder with id {folderId}
        <button onClick={handleCreateFolder}>Create Sub-folder</button>
        <FolderList folderList={folderList}/>
    </div>
    )
}

export default Folder
