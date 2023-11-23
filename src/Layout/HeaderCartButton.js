import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/Cart-Context";
const HeaderCartButton = (props) => {
  const [animateButton, setAnimateButton] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 400);
    return () => clearTimeout;
  }, [items]);

  const cartItems = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button
      className={` button ${animateButton ? "bump" : ""}`}
      onClick={props.show}
    >
      <span className="icorrn">
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className="badge">{cartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
