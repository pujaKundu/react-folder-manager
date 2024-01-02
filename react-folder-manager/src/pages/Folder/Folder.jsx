import React from 'react'
import { useParams } from 'react-router-dom'

const Folder = () => {
    let {folderId}=useParams()
  return (
    <div>
      this is folder with id {folderId}
    </div>
  )
}

export default Folder
