import { productsActions } from "./products-reducer";
import { toast } from 'react-toastify';


export const fetchCategories = () => {
    return async (dispatch) => {
        dispatch(productsActions.fetchCategoriesReducer(
            {categories:[], categoriesLoading:true, categoriesError:""}
        ));
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            if(!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const categoriesData = await response.json();
            dispatch(productsActions.fetchCategoriesReducer(
                {categories: categoriesData, categoriesLoading:false, categoriesError:""}));
        }
        catch(error) {
            dispatch(productsActions.fetchCategoriesReducer(
            {categories:[], categoriesLoading:false, categoriesError:error.message}));
            toast.error(error.message);
        }
    }
}

export const fetchAllProducts = (url) => {
    return async (dispatch) => {
        dispatch(productsActions.fetchAllProductsReducer(
            {products:[], productsLoading:true, productsError:""}
        ));
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const allProductsData = await response.json();
            dispatch(productsActions.fetchAllProductsReducer(
                {products:allProductsData, productsLoading:false, productsError:""}));
        }
        catch(error) {
            dispatch(productsActions.fetchAllProductsReducer(
                {products:[], productsLoading:false, productsError:error.message}));
            toast.error(error.message);
        }
        
    }
}

export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        dispatch(productsActions.fetchSingleProductReducer(
            {product:{}, productLoading:true, productError:""}
        ));
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if(!response.ok) {
                throw new Error('Failed to fetch the product');
            }
            const productData = await response.json();
            dispatch(productsActions.fetchSingleProductReducer(
                {product: productData, productLoading:false, productError:""}));
        }
        catch(error) {
            dispatch(productsActions.fetchSingleProductReducer(
                {product: {}, productLoading:false, productError:error.message}));
            toast.error(error.message);
        }
    }
}


