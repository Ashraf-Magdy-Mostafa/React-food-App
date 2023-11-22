import CartContext from "./Cart-Context";
import { useReducer } from "react";
const defaultCart = {
  items: [],
  totalAmount: 0,
};
//({ type: "ADD", item: item });
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //check if item part of cart
    //get cart item index
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    let updatedItems;
    // use cart item index
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      // found exising entry with the same id
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // {targeted entry}= updated item increased amount
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    //get item index using findIndex
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exisingCartItem.price;
    let updatedItems;

    if (exisingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id); //return an array of approved items
    } else {
      let updatedItem = {
        ...exisingCartItem,
        amount: exisingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultCart);
  const addItemToCart = (item) => {
    // get an object as param <<item>>
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
