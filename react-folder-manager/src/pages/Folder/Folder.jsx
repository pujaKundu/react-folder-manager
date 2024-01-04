import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FolderList from '../../components/FolderList/FolderList';

const Folder = ({ allFolders ,generatedId}) => {


  const { folderId } = useParams();

  generatedId = folderId;
  
  console.log('generated id',generatedId)

  console.log('all folder',allFolders);

  const [currentFolder, setCurrentFolder] = useState(
    allFolders.find((folder) => {
      console.log('folder.id:',folder);
      console.log('folderId:', folderId);
      return folder.id == folderId;
    }) || null
  );

  console.log("curr folder",currentFolder);

  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateSubFolder = () => {
    if (newFolderName.trim() !== '') {
      const newSubFolder = {
        id: generatedId,
        folderName: newFolderName,
        children: [],
      };

      if (currentFolder) {
        currentFolder.children.push(newSubFolder);
        setCurrentFolder({ ...currentFolder });
        // handleCreateSubFolder(newSubFolder)
      }

      setNewFolderName('');
    }
  };

  const handleClick = (folder) => {
    setCurrentFolder(folder);
  };

  return (
    <div >
      {/* <div className='w-32 top-0 left-0 mt-5 bg-indigo-200 p-3 rounded'>
        Folder Id: <span className='font-semibold'>{folderId}</span>
      </div> */}

      {/* Display input and button for creating subfolders */}
      <div className='flex justify-center items-center'>
        <input
          type='text'
          className='border border-1 w-80 p-3 mt-2 rounded shadow-md'
          placeholder={`Enter Sub-Folder Name`}
          required
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <button
          className='ml-5 mt-1 bg-green-400 cursor-pointer flex'
          onClick={handleCreateSubFolder}
        >
          Create Sub-Folder
        </button>
      </div>

      {currentFolder?.children && <FolderList folderList={currentFolder.children} />}

      {currentFolder?.children?.children && <FolderList folderList={currentFolder?.children?.children} />}

    </div>
  );
};

export default Folder;
