import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: "",
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
