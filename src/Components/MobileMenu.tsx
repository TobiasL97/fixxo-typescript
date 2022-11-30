import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(true)

  const toggleMenu = () => {
    setShowMenu(!showMenu)    //Öppna och stäng hamburger-menu
  }

  const closeMenu = () => {
    setShowMenu(false)
    window.scrollTo({top:0, behavior: 'auto'}) //Navigera till vald sida och stäng hamburger-menu
  }
  return (
    <div className="Mobile-Menu">
        <div onClick={toggleMenu} data-testid="hamburgerIcon" className={`hamburger-icon ${!showMenu ? "is-active": ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

        <nav  onClick={toggleMenu} className={`hamburger-menu ${!showMenu ? "is-active": ""}`}>
            <NavLink onClick={closeMenu} className="mobile-menu-link" to="/home" >Home</NavLink>
            <NavLink onClick={closeMenu} className="mobile-menu-link" to="/categories">Categories</NavLink>
            <NavLink onClick={closeMenu} className="mobile-menu-link" to="/products">Products</NavLink>
            <NavLink onClick={closeMenu} className="mobile-menu-link" to="/contacts">Contacts</NavLink>
        </nav>
    </div>
  )
}

export default MobileMenu