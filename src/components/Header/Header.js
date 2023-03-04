import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ showCartHandler }) => {
  const location = useLocation();


  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({ isActive }) => isActive ? classes.active : undefined} end>PRODUCTS</NavLink>
          </li>
        </ul>
        {location.pathname.includes('/products') && <HeaderCartButton showCartHandler={showCartHandler} />}
      </header>
    </>
  )
}

export default Header