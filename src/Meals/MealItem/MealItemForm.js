import Input from "../../UI/Input";
import "./MealItemForm.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber); /// calling throught props
  };
  //obj { amount.value} send it
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
