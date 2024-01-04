import React from 'react'
import { Link } from 'react-router-dom'
import { Folder } from '../../pages';
import FolderUi from '../FolderUi/FolderUi';


let generatedId;

const allFolders = [
  {
    id: 1,
    folderName: 'Folder 1',
    children: [
      {
        id: 2,
        folderName: 'Subfolder 1.1',
        children: [
          {
            id: 5,
            folderName: 'Sub-subfolder 1.1.1',
            children: [
              {
                id: 51,
                folderName: 'Subfolder 5.1',
                children: [
                ],
              },
            ], 
          },
        ],
      },
      {
        id: 3,
        folderName: 'Subfolder 1.2',
        children: [], 
      },
    ],
  },
  {
    id: 2,
    folderName: 'Folder 2',
    children: [], 
  },
  {
    id: 3,
    folderName: 'Folder 3',
    children: [], 
  },
];
const FolderList = ({folderList}) => {
   
  console.log('folderlist comp',folderList)
    return (
    <div className='grid grid-cols-3 mt-5'>
        {folderList.map((folder,index) => {
          return (   
            <FolderUi key={index} folder={folder} />
          )}
        )}
    </div>
  )
}

export default FolderList;
