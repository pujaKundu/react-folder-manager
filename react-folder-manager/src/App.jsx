import { useEffect, useState } from "react";
import "./App.css";
import Folders from "./components/Folders";

function App() {
  const [parent, setParent] = useState(() => {
    const storedParent = localStorage.getItem("parent");
    return storedParent ? JSON.parse(storedParent) : 0;
  });

  const [folders, setFolders] = useState(() => {
    const storedFolders = localStorage.getItem("folders");
    return storedFolders ? JSON.parse(storedFolders) : {};
  });

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  useEffect(() => {
    localStorage.setItem("parent", JSON.stringify(parent));
  }, [parent]);

  return (
    <Folders
      parent={parent}
      folders={folders}
      setParent={setParent}
      setFolders={setFolders}
    />
  );
}

export default App;
