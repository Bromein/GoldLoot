import React from "react";
import Button from "../Button/Button";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default Cart;
