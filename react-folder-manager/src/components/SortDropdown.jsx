import React from 'react'

const SortDropdown = ({sortOption,handleSortChange}) => {
  return (
    <div>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
  )
}

export default SortDropdown
