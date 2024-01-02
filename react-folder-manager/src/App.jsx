import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Folder, Homepage } from './pages'

const allFolders=[]

function App() {

  return (
    <div className='bg-gradient-to-r from-indigo-100 to-gray-100 flex items-center justify-center' id="root">
    <Router>
      <Routes>
          <Route path="/" element={<Homepage allFolders={allFolders}/>} /> 
          <Route path="/folder/:folderId" element={<Folder allFolders={allFolders}/>}
          />
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
