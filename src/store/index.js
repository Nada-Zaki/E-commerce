import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import paymentReducer from "./payment-reducer";
import productsReducer from "./products-reducer";
import wishlistReducer from "./wishlist-reducer";

const store = configureStore({
    reducer: { 
        cart: cartReducer, 
        products: productsReducer,
        auth: authReducer,
        payment: paymentReducer,
        wishlist: wishlistReducer }
});

export default store;
