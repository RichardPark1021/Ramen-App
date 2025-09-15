import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setIcon(openMenu ? faBars : faXmark);
  }

  return (
    <div>
      <nav>
        

        <div className='menu' onClick={toggleMenu}>
          <FontAwesomeIcon icon={icon}/>
        </div>

        <Link to="/" className='name'><FontAwesomeIcon icon={faBowlRice}/> Ichiman Ramen</Link>
        
        <ul className={openMenu ? "open" : ""}>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar