import { useState } from "react";
import "./App.css";
import Folders from "./components/Folders";

function App() {
  const [parent, setParent] = useState(0);

  const [folders, setFolders] = useState({
    id1: { title: "Folder 1", parent: 0, child: [] },
    id2: { title: "Folder 2", parent: 0, child: ["id3", "id4", "id5"] },
    id3: { title: "Folder 2.1", parent: "id2", child: ["id6"] },
    id4: { title: "Folder 2.2", parent: "id2", child: [] },
    id5: { title: "Folder 2.3", parent: "id2", child: [] },
    id6: { title: "Folder 2.1.1", parent: "id3", child: [] },
  });

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
