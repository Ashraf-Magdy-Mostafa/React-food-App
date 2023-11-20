import "./CartItem.css";
const CartItem = (props) => {
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
    </li>
  );
};

export default CartItem;
