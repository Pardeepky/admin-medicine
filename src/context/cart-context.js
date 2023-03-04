import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addToCart: (item) => { },
    handlePurchase: () => { },
    showCartHandler: () => { },
    hideCartHandler: () => { },
    showCart: () => { },
});

export default CartContext