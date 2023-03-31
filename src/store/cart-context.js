import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {

        //creating a constant to get the index of the element in the array with the same id from the received item
        const i = this.items.findIndex(e => e.id === item.id);

        //if the item is already in the array, i is bigger than -1
        //if the item isn't in the array, i = -1;

        if (i === 0) {
            this.items.push(item);
        } else {
            this.items[i].amount =+ item.amount 
        }
        
    },
    removeItem: (id) => {},
});

export default CartContext;