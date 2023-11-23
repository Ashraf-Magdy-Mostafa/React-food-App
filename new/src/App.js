import CartProvider from "./Store/CartProvider";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(false);
  const showCart = () => {
    setCart(true);
  };
  const hideCart = () => {
    setCart(false);
  };
  return (
    <CartProvider>
      {cart && <Cart hide={hideCart} />}
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
