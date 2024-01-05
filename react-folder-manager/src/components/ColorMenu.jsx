import React from 'react'

const ColorMenu = ({handleColor}) => {
  return (
    <div className="flex ml-3 my-1 justify-left items-center">
        <div className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleColor("bg-white")}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </div>
        <div
          className="w-3 h-3 bg-blue-500 hover:bg-blue-600 rounded-full mr-2 cursor-pointer"
          onClick={() => handleColor("bg-blue-100")}
        ></div>
        <div
          className="w-3 h-3 bg-green-300 hover:bg-green-400  rounded-full mr-2  cursor-pointer"
          onClick={() => handleColor("bg-green-100")}
        ></div>
        <div
          className="w-3 h-3 bg-yellow-300 hover:bg-yellow-400 rounded-full cursor-pointer"
          onClick={() => handleColor("bg-yellow-200")}
        ></div>
      </div>
  )
}

export default ColorMenu
