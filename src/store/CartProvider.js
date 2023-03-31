import { useReducer } from "react";
import CartContext from "./cart-context";

//create a default state to be assign when the component is loaded for the first time
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//create a function to act as the reducer in the useReducer hook,
//because the logic is a little complex
//the reducer function receives two arguments from react, the current state and the action
const cartReducer = (state, action) => {
  //when the reducer function is triggered, check for what is the type and act accordingly
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //push() and unshift() methods alter the existing array
    //concat returns a new array which is the ideal here
    //because helps react to track what's happening
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      //instead of reassining only the fields needed, I'm overwriting the whole object
      //to use the non-mutational approach
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
        updatedItems = [ ...state.items ];
        updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

//the objective of this component is to alter the CartContext and
//provide its content to the rest of the application
const CartProvider = (props) => {
  //the useReducer() hook returns an array with two elements, similar to useState()
  //but it also expects two arguments. First, the function to be triggered as the reducer
  //and second, the initial state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    //when an action is dispatched, it's a convention to give an object as the argument.
    //the object has a type property with a identifier as a string all CAPS
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

//to work with the context
