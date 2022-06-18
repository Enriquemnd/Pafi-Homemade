import { useEffect } from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const isOpen = props.isOpen;

  return (
    <div className={`${styles.Cart} ${isOpen ? "" : styles.collapsed}`}>
      {props.shoppingCart.map((product) => (
        <div>
          <div>id: {product.id}</div>
          <div>count: {product.count}</div>
        </div>
      ))}
    </div>
  );
};
export default Cart;
