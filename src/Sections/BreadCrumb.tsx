import React from 'react'
import { NavLink } from 'react-router-dom'
import { BreadCrumbProps } from '../Models/BreadCrumbModel'

const BreadCrumb: React.FC<BreadCrumbProps> = ({page, pageName}) => {
  return (
    <section className="__breadcrumb">
        <div className="container-small">
            <ul className="breadcrumb-list">
                <li><NavLink className="breadcrumb-home" to="/home">Home</NavLink></li>
                <li><NavLink className="breadcrumb-page" to={page}>{pageName}</NavLink></li>
            </ul>
        </div>
    </section>
  )
}

export default BreadCrumb