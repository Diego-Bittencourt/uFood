import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = props => {
    return (
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                //all the properties are native input properties
                //they will be passed to the child element because I used the spread operator
                //in the child input to receive that
            }}/>
            <button>+ Add</button>
        </form>
    )
};

export default MealItemForm;