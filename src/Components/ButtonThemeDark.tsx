import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonModel } from '../Models/ButtonModel'

const ButtonThemeDark: React.FC<ButtonModel> = ({text, link}) => {

  const toTop = () => {
    window.scrollTo({top:0, behavior: 'auto'})
  }

  return (
    <NavLink  className="button-theme-dark" to={link} onClick={toTop}>
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeDark