import axios from "axios";
import { useState } from "react";
import CartContext from "./cart-context";

const url = 'https://crudcrud.com/api/a59a70b2422a4737abcb1036bcb3693d/'

const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    const addToCart = (addItem) => {
        try {
            const index = items.findIndex((item) => item._id === addItem._id);
            const existingCartItem = items[index];
            let updatedItems;
            if (index > -1) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: +existingCartItem.quantity + +addItem.quantity,
                };
                updatedItems = [...items];
                updatedItems[index] = updatedItem;
                setItems(updatedItems);
            } else {
                setItems([...items, addItem]);
            }
            setTotalAmount(totalAmount + addItem.price * addItem.quantity);
        } catch (error) {
            console.log(error)
        }
    };

    const handlePurchase = () => {
        window.alert('Bill Generated')
        setItems([]);
        setTotalAmount(0);
    }

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addToCart: addToCart,
        handlePurchase: handlePurchase,
        showCart: showCart,
        showCartHandler: showCartHandler,
        hideCartHandler: hideCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider