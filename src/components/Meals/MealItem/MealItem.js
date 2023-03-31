import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";


const MealItem = (props) => {

  //setting 2 decimal to the price
  const price = props.price.toFixed(2);

  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
      const meal = {
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount,
      }

    cartCtx.addItem(meal)

  };

  return (
    <li className={styles.meal}>
      <div><h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>US$ {price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
