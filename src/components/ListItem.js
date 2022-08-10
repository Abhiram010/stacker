import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({linkSource,linkName}) => {
  return (
      <li className='nav-item text-white'>
          <Link onClick={linkSource} className='nav-link' to=''>{linkName}</Link>
    </li>
  )
}

export default ListItem