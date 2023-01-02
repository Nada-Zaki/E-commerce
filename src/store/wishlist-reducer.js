import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : { 
        items: [], 
        totalQuantity: 0,
    },
    reducers: {
        addItemToList(state, action) {
            state.totalQuantity += 1;
            const newItem= action.payload;
            state.items.push({
                ...newItem,
                rating: {rate:newItem.rate, count: newItem.count}
            });
            toast.info('Item added to wishlist');
        },
        removeItemFromList(state, action) {
            const id = action.payload;
            state.totalQuantity--;
            state.items = state.items.filter(item => item.id !== id);
        }
    }   
});


export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;