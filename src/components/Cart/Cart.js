import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import CartContext from "../../context/cart-context";

const Cart = () => {

  const cartCtx = useContext(CartContext);

  const data = cartCtx.items.map((item) => (
    <CartItem
      id={item._id}
      key={item._id}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
    ></CartItem>
  ));

  useEffect(() => {
    console.log(cartCtx.items);
  }, [])

  const cartItems = <ul className={classes["cart-items"]}>{data}</ul>;
  return (
    <Modal hideCartHandler={cartCtx.hideCartHandler} >
      <span style={{ float: 'right', fontSize: '2rem', cursor: 'pointer' }} className="m-1" onClick={cartCtx.hideCartHandler}>x</span>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>Rs {cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={cartCtx.handlePurchase}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;