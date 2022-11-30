import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../Components/MobileMenu'
import FixxoLogo from '../Assets/fixxo-icon.svg'
import { IShoppingCartContextType, ShoppingCartContext } from '../Contexts/shoppingCartContext'

const Header: React.FC = () => {

  const { cartQuantity } = React.useContext(ShoppingCartContext) as IShoppingCartContextType;


  return (
    <header className="header-gray">
      <div className="container">
          <nav className="__navbar flex c-between">
              <MobileMenu />
              <NavLink to="/home" className="fixxo-logo"><img src={FixxoLogo} alt="Fixxo-Logo"/></NavLink>

              <div className="navbar-middle-links">
                  <NavLink className="navbar-middle-link" to="/home" end>Home</NavLink>
                  <NavLink className="navbar-middle-link" to="/categories" end>Categories</NavLink>
                  <NavLink className="navbar-middle-link" to="/products" end>Products</NavLink>
                  <NavLink className="navbar-middle-link" to="/contacts" end>Contacts</NavLink>
              </div>

              <div className="navbar-icons">
                  <NavLink to="" className="navbar-icon" end>
                    <span ></span>    
                      <i className="fa-regular fa-magnifying-glass"></i>
                  </NavLink>
                  <NavLink to="" className="navbar-icon" end>
                    <span></span>    
                      <i className="fa-regular fa-code-compare"></i>
                  </NavLink>
                  <NavLink to="" className="navbar-icon" end>
                    <span></span>    
                      <i className="fa-regular fa-heart"></i>
                  </NavLink>
                  <button className="navbar-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                        <span className="notification">{cartQuantity}</span>    
                        <i className="fa-regular fa-bag-shopping"></i>
                  </button>
              </div>
          </nav>
      </div>
    </header>
  )
}

export default Header