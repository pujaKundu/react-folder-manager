import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import PathNavigation from "./PathNavigation";

const Folders = ({ parent, folders, setParent, setFolders }) => {

  const [path, setPath] = useState([]);

  // path
  useEffect(() => {
    const updatePath = () => {
      let currPath = parent; // current parent path
      const newPath = [];

      while (currPath !== 0 && folders[currPath]) {
        newPath.unshift(folders[currPath].title); // adding curr folder name in the start of array
        currPath = folders[currPath].parent;
      }

      setPath(newPath);
    };
    updatePath();
  }, [parent, folders]);

  // path functionalities
  const handlePathClick = (index) => {
    const newPath = path.slice(0, index + 1);
    const currentParentFolderTitle = newPath[newPath.length - 1];

    const matchedFolder = Object.entries(folders).find(
      ([key, value]) => value?.title === currentParentFolderTitle
    );

    if (matchedFolder) {
      setParent(matchedFolder[0]); // matched folder id set to parent
    }
  };

  // create folder btn
  const handleCreateFolder = () => {
    let randomValue = Math.random().toString(16).slice(2);
    const randomKey = `id${randomValue}`;

    const newFolder = {
      title: `Folder ${Object.keys(folders).length + 1}`,
      parent: parent,
      child: [],
    };

    setFolders((prevFolders) => {
      const updatedFolders = { ...prevFolders };
      updatedFolders[randomKey] = newFolder;

      if (updatedFolders[parent]) {
        updatedFolders[parent].child.push(randomKey);
      }

      return updatedFolders;
    });
  };

  // delete
  const handleDelete = (fid) => {

    alert("Confirm delete");

    const updatedFolders = { ...folders };
    const folderToDelete = folders[fid];

    delete updatedFolders[fid];

    // when i click on a child folder, it deletes the that child it from parent
    if (  
      folderToDelete?.parent &&
      updatedFolders[folderToDelete.parent]
    ) {
      updatedFolders[folderToDelete.parent].child = updatedFolders[
        folderToDelete.parent
      ].child.filter((childId) => childId !== fid);
    }
    // update folders
    setFolders(updatedFolders);
  };

  return (
    <div className="mt-5 mx-24">
      <h1 className="text-slate-600 text-3xl">Folder Manager</h1>

      {/* home, create folder btn container */}
      
      <Navigation setParent={setParent} handleCreateFolder={handleCreateFolder} />

      {/* folder path */}
      
      <PathNavigation path={path} handlePathClick={handlePathClick} />

      {Object.keys(folders).map((fid) => {
        let thisFolder = folders[fid];

        if (thisFolder.parent !== parent) return null;

        return (
          <div className="flex mt-5 justify-between items-center hover:shadow-md border border-1 rounded mx-5">
            
            <span
              className="flex p-1 m-3 rounded cursor-pointer"
              onClick={() => {
                setParent(fid);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f7cb52"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
              {thisFolder.title}
              
            </span>
            {/* delete btn */}
            <button
              className="text-red-500 bg-transparent hover:text-red-700 mr-4"
              onClick={() => handleDelete(fid)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Folders;
