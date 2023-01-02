import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainImage from '../components/home/MainImage';
import ProductsList from '../components/products/ProductsList';
import { fetchAllProducts } from '../store/products-actions';


const Home = () => {
  const dispatch = useDispatch();
  const url = 'https://fakestoreapi.com/products?limit=10';
  const {products, productsLoading} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts(url))
  }, [dispatch])
  
  return (
      <Fragment>
        {products.length>0 && 
        <> 
          <MainImage />
          <h2 className='centered'>Most Selling Products</h2> 
        </>}
        <ProductsList items={products} itemsLoading={productsLoading} /> 
      </Fragment>
  )
}

export default Home