import React, { useState,useEffect } from "react";
import ColorMenu from "./ColorMenu";

const Folder = ({ setParent, thisFolder, handleDelete, fid }) => {
  const [folderColor, setFolderColor] = useState("bg-white");

  const handleColor = (chosenColor) => {
    setFolderColor(chosenColor);
    localStorage.setItem(`folderColor_${fid}`,chosenColor)
  };

  useEffect(() => {
    const storedColor = localStorage.getItem(`folderColor_${fid}`);
    if (storedColor) {
      setFolderColor(storedColor);
    }
  }, [fid]); // Trigger when the folder ID changes  

  return (
    <div className="border border-1 my-2 mr-3 rounded hover:shadow-md bg-slate-50">
      {/* color menu */}
      
      <ColorMenu handleColor={handleColor} />
      {/* folder */}
      <div
        className={`flex justify-between items-center px-4 py-2 ${folderColor}`}
      >
        <span
          className="flex p-1 rounded cursor-pointer "
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
          className="text-red-700 bg-transparent hover:text-red-500 border-0"
          onClick={() => handleDelete(fid)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Folder;
