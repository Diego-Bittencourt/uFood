import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

//using the spread operator inside the built-in input element garantees that any props passed to this element
//will be added as it-is here.

export default Input;
