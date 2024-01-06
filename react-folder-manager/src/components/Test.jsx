import React, { useState, useEffect } from "react";
import Folder from "./Folder";
import PathNavigation from "./PathNavigation";
import SortDropdown from "./SortDropdown";
import Navigation from "./Navigation";

const Test = ({ folders, setFolders ,setParent}) => {
  const [path, setPath] = useState([0]);
  const [sortOption, setSortOption] = useState("asc");

  const handlePathClick = (index) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
  };

  const getCurrentFolder = () => {
    let currentFolder = folders;
    for (const folderId of path) {
      currentFolder = currentFolder[folderId]?.child || {};
    }
    return currentFolder;
  };

//   const handleCreateFolder = () => {
//     let randomValue = Math.random().toString(16).slice(2);
//     const randomKey = `id${randomValue}`;

//     const newFolder = {
//       title: `Folder ${Object.keys(folders).length + 1}`,
//       parent: path[path.length - 1],
//       child: [],
//     };

//     setFolders((prevFolders) => {
//       const updatedFolders = { ...prevFolders };
//       updatedFolders[randomKey] = newFolder;
//       if (updatedFolders[newFolder.parent]) {
//         updatedFolders[newFolder.parent].child.push(randomKey);
//       }

//       localStorage.setItem("folders", JSON.stringify(updatedFolders));

//       return updatedFolders;
//     });
//   };

const handleCreateFolder = () => {
    let randomValue = Math.random().toString(16).slice(2);
    const randomKey = `id${randomValue}`;

    const newFolder = {
      title: `Folder ${Object.keys(folders).length + 1}`,
      parent: path[path.length - 1],
      child: [],
    };
    setFolders((prevFolders) => {
        const updatedFolders = { ...prevFolders };
        updatedFolders[randomKey] = newFolder;
  
        if (updatedFolders[newFolder.parent]) {
          updatedFolders[newFolder.parent].child.push(randomKey);
        }
  
        localStorage.setItem("folders", JSON.stringify(updatedFolders));
  
        // Update the path after creating a new folder
        setPath([
          0,
          ...path.slice(1).map((title) => findFolderIdByTitle(updatedFolders, title)),
          randomKey,
        ]);
  
        return updatedFolders;
      });
    };

  const handleDelete = (fid) => {
    alert("Confirm delete");

    const updatedFolders = { ...folders };
    const folderToDelete = folders[fid];

    delete updatedFolders[fid];

    if (
      folderToDelete?.parent &&
      updatedFolders[folderToDelete.parent]?.child
    ) {
      updatedFolders[folderToDelete.parent].child = updatedFolders[
        folderToDelete.parent
      ].child.filter((childId) => childId !== fid);
    }

    setFolders(updatedFolders);
  };
  const sortFolders = (option) => {
    const sortedKeys = Object.keys(folders).sort((a, b) => {
      const titleA = folders[a].title.toUpperCase();
      const titleB = folders[b].title.toUpperCase();

      if (option === "asc") {
        return titleA.localeCompare(titleB);
      } else if (option === "desc") {
        return titleB.localeCompare(titleA);
      }
      return 0;
    });

    const sortedFolders = {};
    sortedKeys.forEach((key) => {
      sortedFolders[key] = folders[key];
    });

    return sortedFolders;
  };
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    const sortedFolders = sortFolders(selectedOption);
    setFolders(sortedFolders);
  };
  useEffect(() => {
    const updatePath = () => {
      let currPath = path[path.length - 1];
      const newPath = [];

      while (currPath !== 0 && folders[currPath]) {
        newPath.unshift(folders[currPath].title);
        currPath = folders[currPath].parent;
      }
      setPath([
        0,
        ...newPath.map((title) => findFolderIdByTitle(folders, title)),
      ]);
    };
    updatePath();
  }, [folders]);
  const findFolderIdByTitle = (folders, title) => {
    return Object.keys(folders).find((key) => folders[key]?.title === title);
  };

  const currentFolder = getCurrentFolder();

  return (
    <div className="mt-5 mx-24">
      <h1 className="text-slate-600 text-3xl">Folder Manager</h1>

      <div className="">
        {/* home, create folder btn container */}
        <Navigation
          setParent={setParent}
          handleCreateFolder={handleCreateFolder}
        />
        {/* Sorting dropdown */}
        <SortDropdown
          sortOption={sortOption}
          handleSortChange={handleSortChange}
        />
      </div>
      <PathNavigation path={path} handlePathClick={handlePathClick} />

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
        {/* Filter and display folders based on the current path */}
        {Object.keys(currentFolder).map((fid) => {
          let thisFolder = currentFolder[fid];

          return (
            <Folder
              key={fid}
              setParent={setParent}
              thisFolder={thisFolder}
              handleDelete={handleDelete}
              fid={fid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Test;
