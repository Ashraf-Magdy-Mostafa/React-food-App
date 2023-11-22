import Modal from "../UI/modal";
import "./Cart.css";
import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartContext from "../Store/Cart-Context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const CartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => {
        const itemPlus = (item) => {
          ctx.addItem({ ...item, amount: 1 });
        };
        const decreaseItem = (id) => {
          ctx.removeItem(id);
        };
        return (
          <div>
            <CartItem
              hide={props.hide}
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={itemPlus.bind(null, item)}
              onRemove={decreaseItem.bind(null, item.id)}
            />
          </div>
        );
      })}
    </ul>
  );

  return (
    <Modal hide={props.hide}>
      {CartItems}
      <div className="Tamount">
        <span>Total Amount </span>
        <span>{`$${Number(ctx.totalAmount).toFixed(2)}`}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.hide}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
