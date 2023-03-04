import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import classes from './headerCart.module.css'

const HeaderCartButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item)=> {
    return parseInt(curNum)+ parseInt(item.quantity);
  },0);

  return (
    <>
      <button className={classes.button} onClick={showCartHandler}>Cart <span className={classes.badge}>{numberOfCartItems}</span></button>
    </>
  )
}

export default HeaderCartButton