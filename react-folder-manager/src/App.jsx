import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Folder, Homepage } from './pages'
import FolderList from './components/FolderList/FolderList'

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} /> 
          <Route path="/folder/:folderId" element={<Folder/>}
          />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
