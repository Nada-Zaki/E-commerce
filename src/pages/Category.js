import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/products/ProductsList';
import { fetchAllProducts } from '../store/products-actions';

const Category = () => {
  const dispatch = useDispatch();
  const {categoryName} = useParams();
  const url = `https://fakestoreapi.com/products/category/${categoryName}`;
  const {products, productsLoading} = useSelector(state => state.products);
  

  useEffect(() => {
    dispatch(fetchAllProducts(url))
  }, [dispatch, url])

  return (
    <Fragment>
      {products.length>0 && <h2 className='centered'>{categoryName}</h2>}
      <ProductsList items={products} itemsLoading={productsLoading} />
    </Fragment>
  )
}

export default Category