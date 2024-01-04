import React, { useState ,useEffect} from "react";

const Folders = ({parent, folders, setParent,setFolders}) =>{

    console.log(folders)

    const [path,setPath]=useState([])

    // path 

    useEffect(()=>{

        const updatePath =()=>{
            let currPath = parent; // current parent path
            const newPath = [];

            while(currPath !== 0 && folders[currPath]){
                newPath.unshift(folders[currPath].title);// adding curr folder name in the start of array
                currPath = folders[currPath].parent
            }

            setPath(newPath)

        }

        updatePath()
    },[parent,folders])

    // path functionalities

    const handlePathClick = (index)=>{

        const newPath = path.slice(0,index+1)
        console.log('new path',newPath)

        // if(newPath.length<2) return;

        const parentFolderTitle = newPath[newPath.length-1]

        console.log('parent folder title ',parentFolderTitle)

        const matchedFolder = Object.entries(folders).find(
            ([key,value])=> value?.title === parentFolderTitle
        )

        if(matchedFolder){
            setParent(matchedFolder[0])
        }

    }
    
    // create folder btn
    const handleCreateFolder=()=>{

        let randomValue = Math.random().toString(16).slice(2);
        const randomKey = `id${randomValue}`;
        
        const newFolder= {
            title: `Folder ${Object.keys(folders).length+1}`,
            parent:parent,
            child:[]
        }

        setFolders((prevFolders)=>{

            const updatedFolders={...prevFolders}
            updatedFolders[randomKey]=newFolder;

            if(updatedFolders[parent]){
                updatedFolders[parent].child.push(randomKey)
            }

        return updatedFolders;
        
        })

    }


    return (
        <div className="mt-5">

        <button onClick={()=>{setParent(0)}} className="bg-red-300 cursor-pointer">Home</button>

            <div className="m-5">
                path : {
                    path.map((folder,index)=>(
                        <span key={folder}
                        onClick={()=>handlePathClick(index)}
                        className="underline cursor-pointer"
                        >
                            {folder}
                            {index !== path.length-1 && ' > '}
                        </span>
                    ))
                }
            </div>


            <button className="bg-green-200 cursor-pointer" onClick={handleCreateFolder}>Create folder</button>

            {Object.keys(folders).map((f)=>{
                let thisFolder = folders[f];

                if(thisFolder.parent !== parent) return null;

                return (
                    <div className="flex mt-5 justify-center items-center">
                        <span className="bg-indigo-200 p-5 m-3 rounded cursor-pointer" onClick={()=>{setParent(f)}}>
                        {thisFolder.title}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Folders;