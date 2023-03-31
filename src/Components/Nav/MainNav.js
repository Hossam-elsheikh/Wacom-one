import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Wacom-logo.png'
import classes from './MainNav.module.css'
const MainNav = () => {
  return (
    <div>
    <nav>
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li> <NavLink to='features'>Features</NavLink></li>
           <li><NavLink to='contact'>Contact</NavLink></li>
            
        </ul>
    </nav>
    </div>
  )
}

export default MainNav