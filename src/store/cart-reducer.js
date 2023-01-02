import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name: 'cart',
    initialState : { 
        items: [], 
        totalQuantity: 0,
        subTotal: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem= action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            state.totalQuantity += +newItem.quantity;
            state.subTotal += newItem.price * newItem.quantity;

            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    image: newItem.image,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: newItem.quantity,
                });
            } else {    
                state.totalQuantity -= existingItem.quantity;
                state.subTotal -= existingItem.price * existingItem.quantity;   
                existingItem.quantity = newItem.quantity;
            }
            toast.info("Item added to cart");
        },
        removeItemFromCart(state, action) {
            const existingItem = action.payload;
            state.totalQuantity -= existingItem.quantity;
            state.subTotal -= existingItem.price * existingItem.quantity; 
            state.items = state.items.filter(item => item.id !== existingItem.id);
        },
        emptyCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.subTotal = 0;
        }
    }   
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;