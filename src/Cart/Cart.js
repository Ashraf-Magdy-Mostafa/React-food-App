import Modal from "../UI/modal";
import "./Cart.css";
const Cart = () => {
  const CartItems = (
    <ul className="cart-items">
      {[
        {
          id: "ee1",
          name: "keshk",
          desc: "helthy meals",
          amount: "2",
          price: "29",
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className="actions">
        <button className="button--alt"> Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
