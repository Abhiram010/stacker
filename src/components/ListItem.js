import React from 'react'

const ListItem = ({ linkName, onclicked }) => {
  return (
      <li className='nav-item text-white'>
      <button className="myPill" onClick={()=>(onclicked(linkName))}>{ linkName}</button>
    </li>
  )
}

export default ListItem