import { useEffect, useState } from "react";
import "./App.css";
import Folders from "./components/Folders";
import Test from "./components/Test";

function App() {

  // const [parent, setParent] = useState(0);
  const [parent, setParent] = useState(() => {
    const storedParent = localStorage.getItem('parent');
    return storedParent ? JSON.parse(storedParent) : 0;
  });


  const [folders, setFolders] = useState(() => {
    const storedFolders = localStorage.getItem("folders");
    return storedFolders ? JSON.parse(storedFolders) : {
    };
  });

  useEffect(()=>{
    localStorage.setItem('folders',JSON.stringify(folders))
  },[folders])

  useEffect(() => {
    localStorage.setItem('parent', JSON.stringify(parent));
  }, [parent]);

  return (
    <Folders
      parent={parent}
      folders={folders}
      setParent={setParent}
      setFolders={setFolders}
    />
    // <Test folders={folders} setFolders={setFolders} setParent={setParent} />
  );
}

export default App;