import React from "react";
function logg() {
  console.log("CTX _CONTEX >JS");
}

const CartContext = React.createContext({
  items: [],
  totalAmount: "",
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
