import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import PathNavigation from "./PathNavigation";
import Folder from "./Folder";

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

      // set folders to local storage
      localStorage.setItem('folders',JSON.stringify(updatedFolders))

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
    if (folderToDelete?.parent && updatedFolders[folderToDelete.parent]) {
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

      <Navigation
        setParent={setParent}
        handleCreateFolder={handleCreateFolder}
      />

      {/* folder path */}

      <PathNavigation path={path} handlePathClick={handlePathClick} />

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
        {Object.keys(folders).map((fid) => {
          let thisFolder = folders[fid];

          if (thisFolder.parent !== parent) return null;

          return (
            <Folder key={fid} setParent={setParent} thisFolder={thisFolder} handleDelete={handleDelete} fid={fid} />
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
