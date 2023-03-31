import CartContext from './cart-context';

//the objective of this component is to alter the CartContext and 
//provide its content to the rest of the application
const CartProvider = props => {

    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = id => {};



    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;