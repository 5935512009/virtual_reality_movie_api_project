import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {

  return (
    <div className='nav'>
      <div className='nav-left'> 
        Movie virtual reality
        <ul>
            <li>
                <Link to="./">Home</Link>
                <Link to="./movies">Movies</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
