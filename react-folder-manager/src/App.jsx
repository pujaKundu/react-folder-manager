import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Folder, Homepage } from './pages'
import FolderList from './components/FolderList/FolderList'

const allFolders=[]

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Homepage allFolders={allFolders}/>} /> 
          <Route path="/folder/:folderId" element={<Folder allFolders={allFolders}/>}
          />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
