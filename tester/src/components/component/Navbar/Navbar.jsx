import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar() {
  return (
    <div>
      <nav>  
              <ul className='list-unstyled d-flex mt-2'>
                 <li className='px-2'><NavLink to='/home'> Home </NavLink></li>
                 <li className='px-2'><NavLink to='/login'> Login </NavLink></li>
                 <li className='px-2' ><NavLink to='/register'> Register </NavLink></li>
              </ul>

      </nav>
    </div>
  )
}
