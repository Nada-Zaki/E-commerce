import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState : { 
        customerData: {},
    },
    reducers: {
        saveCustomerData(state, action) {
            state.customerData = action.payload;
        }
    }   
});


export const paymentActions = paymentSlice.actions;

export default paymentSlice.reducer;