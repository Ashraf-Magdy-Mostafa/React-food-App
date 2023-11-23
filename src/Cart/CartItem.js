import "./CartItem.css";
import { v4 as uuidv4 } from "uuid";
const CartItem = (props) => {
  // const Num = Math.random();
  return (
    <li className="li-container">
      <div className="main-container">
        <div className="second-container">
          <h2>{props.name}</h2>
          <div className="price-helper">
            <span>{`x${props.amount}`}</span>
            <span>{`$${props.price}`}</span>
          </div>
        </div>
      </div>
      <div>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
