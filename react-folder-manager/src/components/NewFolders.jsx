import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import PathNavigation from "./PathNavigation";
import Folder from "./Folder";

const NewFolders = ({ parent, folders, setParent, setFolders }) => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const updatePath = () => {
      let currPath = parent;
      const newPath = [];

      while (currPath !== 0 && folders[currPath]) {
        newPath.unshift(folders[currPath]);
        currPath = folders[currPath].parent;
      }

      setPath(newPath);
    };
    updatePath();
  }, [parent, folders]);

  const handlePathClick = (index) => {
    if (index === 0) {
      setParent(0);
      localStorage.setItem("currentParent",0)
    } else {
        const newPathParentId = path[index-1].id;
        setParent(newPathParentId);
        localStorage.setItem("currentParent",newPathParentId)
    }
  };

  const handleCreateFolder = () => {
    let randomValue = Math.random().toString(16).slice(2);
    const randomKey = `id${randomValue}`;

    const newFolder = {
      id: randomKey,
      title: `Folder ${Object.keys(folders).length + 1}`,
      parent: parent,
      child: [],
      color: "",
    };

    setFolders((prevFolders) => {
      const updatedFolders = { ...prevFolders };
      updatedFolders[randomKey] = newFolder;

      if (updatedFolders[parent]) {
        updatedFolders[parent].child.push(randomKey);
      }

      localStorage.setItem("folders", JSON.stringify(updatedFolders));

      return updatedFolders;
    });
  };

  const handleDelete = (fid) => {
    alert("Confirm delete");

    const updatedFolders = { ...folders };
    const folderToDelete = folders[fid];

    delete updatedFolders[fid];

    if (folderToDelete?.parent && updatedFolders[folderToDelete.parent]) {
      updatedFolders[folderToDelete.parent].child = updatedFolders[
        folderToDelete.parent
      ].child.filter((childId) => childId !== fid);
    }

    setFolders(updatedFolders);
  };

  return (
    <div className="mt-5 mx-24">
      <h1 className="text-slate-600 text-3xl">Folder Manager</h1>
      <Navigation setParent={setParent} handleCreateFolder={handleCreateFolder} />
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

export default NewFolders;
