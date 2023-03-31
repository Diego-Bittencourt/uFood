import styles from "./Input.module.css";
import React from "react";

//I'm using refs to send the input value to the custom Input component
//importing React to use the React.forwardRef and wrap the component
//function in it.
const Input = React.forwardRef((props, ref) => {
  //now the whole function is an argument to the forwardRef function

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

//using the spread operator inside the built-in input element garantees that any props passed to this element
//will be added as it-is here.

export default Input;
