import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState : {       
        categories:[],
        categoriesLoading:false,
        categoriesError:"",
        products: [],
        productsLoading:false,
        productsError:"",
        product: {},
        productLoading:false,
        productError:""
    },
    reducers: {
        fetchCategoriesReducer(state, action) {
            state.categories = action.payload.categories;
            state.categoriesLoading = action.payload.categoriesLoading;
            state.categoriesError = action.payload.categoriesError;
        },
        fetchAllProductsReducer(state, action) {
            state.products = action.payload.products;
            state.productsLoading = action.payload.productsLoading;
            state.productsError = action.payload.productsError;
        },
        fetchSingleProductReducer(state,action) {
            state.product = action.payload.product;
            state.productLoading = action.payload.productLoading;
            state.productError = action.payload.productError;
        }  
    }   
});



export const productsActions = productsSlice.actions;

export default productsSlice.reducer;