import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {

    //creating a state just to validate the input
    const [isFormValid, setIsFormValid] = useState(true);

  //ths could be handled with two-wa binding, but this approach I'm using refs
  const amountInputRef = useRef();
  //Usually, refs only works with standard html elements, but you can make it work
  //by wrapping the component function in the React.forwardRef() function

  const submitHandler = (event) => {
    event.preventDefault();

    //the value in the ref.current.value is always a string, so it needs to be converted to number
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
        setIsFormValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = 1;
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          //all the properties are native input properties
          //they will be passed to the child element because I used the spread operator
          //in the child input to receive that
        }}
      />
      <button onClick={props.addItemHandler}>+ Add</button>
      {!isFormValid && <p>Please, enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
