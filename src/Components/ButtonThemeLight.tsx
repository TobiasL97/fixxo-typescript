import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonModel } from '../Models/ButtonModel'

const ButtonThemeLight = ({text, link}: ButtonModel) => {

  const toTop = () => {
    window.scrollTo({top:0, behavior: 'auto'})
  }

  return (
    <NavLink onClick={toTop} className="button-theme-light" to={link}>
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeLight