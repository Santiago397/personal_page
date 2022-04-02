import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-indigo-500'>
      <div className='w-1/3'>
        <ul className='hidden md:flex w-full justify-between my-3 px-3'>
          <li>
            <Link to={"/"}>About me</Link>
          </li>
          <li>
            <Link to={"/"}>Work</Link>
          </li>
          <li>
            <Link to={"#"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar