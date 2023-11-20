import { useContext } from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/Cart-Context";
const MealItem = (props) => {
  const price = `$${props.price}`;
  const ctx = useContext(CartContext);
  // getting data via Props from AvailableMeals.js
  const addToCartHandler = (enteredAmount) => {
    ctx.addItem({
      key: props.id,
      id: props.id,
      name: props.name,
      amount: enteredAmount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
