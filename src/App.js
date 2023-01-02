import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Category = React.lazy(() => import('./pages/Category'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Login = React.lazy(()=> import('./pages/auth/Login'));
const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Wishlist = React.lazy(() => import('./pages/wishlist/Wishlist'));
const Checkout = React.lazy(()=> import('./pages/Checkout'));
const Payment = React.lazy(() => import('./pages/Payment'));
const Confirmation = React.lazy(() => import('./pages/confirmation/Confirmation'));


function App() {
  return (
    <div className="App">
      <Layout>
        <ToastContainer />
        <Suspense fallback={
          <LoadingSpinner />
          }>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/products" />
            </Route>
            <Route path="/products" exact>
              <Home />
            </Route>
            <Route path="/products/category/:categoryName" >
              <Category />
            </Route>   
            <Route path="/productDetails/:productId">
              <ProductDetails />
            </Route>  
            <Route path="/cart">
              <Cart />
            </Route> 
            <Route path="/login">
              <Login />
            </Route>  
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>    
        </Suspense>    
      </Layout>
    </div>
  );
}

export default App;
