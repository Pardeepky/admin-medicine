import { useContext } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Outlet } from "react-router-dom";
import CartContext from "./context/cart-context";

function App() {
 
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartCtx.showCart && <Cart hideCartHandler={cartCtx.hideCartHandler} />}
      <Header showCartHandler={cartCtx.showCartHandler} />
      <main className="container" style={{marginTop: '10rem'}}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
