import React from 'react'

const PathNavigation = ({path, handlePathClick}) => {
  return (
    <div className="mr-5 flex">
        {/* path icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {path.length === 0 ? (
          "Home"
        ) : (
          <div >
            {/* show folder paths */}
            {path.map((folder, index) => (
              <span
                key={folder}
                onClick={() => handlePathClick(index)}
                className="cursor-pointer mb-3 border border-b-2 border-t-0 border-e-0 border-s-0"
              >
                {`${folder} > `}
              </span>
            ))}
          </div>
        )}
      </div>
  )
}

export default PathNavigation
