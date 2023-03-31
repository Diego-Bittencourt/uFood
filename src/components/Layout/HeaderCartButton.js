import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted && styles.bump}`

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const btnBump = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    //returning a function in a useEffect works as a clean up function
    return () => {
      clearTimeout(btnBump)
    };
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
