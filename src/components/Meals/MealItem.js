import styles from "./MealItem.module.css";
import Card from "../UI/Card";

const MealItem = (props) => {
  return (
    <Card className={styles.meal}>
      <h3>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>US$ {props.price}</p>
    </Card>
  );
};

export default MealItem;
