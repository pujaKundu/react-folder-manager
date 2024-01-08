import React, { useState } from "react";

const Modal = ({ setShowInput, setFolderName, handleCreateFolder,folders }) => {
  const [inputValue, setInputValue] = useState("");
  const [showError,setShowError]=useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

const handleCreate = () => {
    // Prevent creating folders with empty names
    if (!inputValue.trim()) {

      return;
    }
  
    let count = 1;
    let newFolderName = inputValue;
    const folderNames = Object.values(folders).map((folder) => folder.title);
  
    while (folderNames.includes(newFolderName)) {
      newFolderName = `${inputValue} (${count})`;
      count++;
    }
    // Pass the updated folderName directly to the function
    handleCreateFolder(newFolderName);
  
    // Reset states and close modal
    setShowInput(false);
    setInputValue('');
  };  

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  const closeModal = () => {
    setShowInput(false);
    setInputValue("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-100 p-6 rounded-md w-96">
        <span
          className="absolute top-2 right-2 cursor-pointer text-xl"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2 className="text-lg font-semibold mb-4">Create Folder</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter folder name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Create
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
