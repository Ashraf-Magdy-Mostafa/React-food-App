import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.show}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className="badge">{cartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
