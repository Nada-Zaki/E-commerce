import React, { Fragment } from 'react';
import classes from './ProductsList.module.css';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import LoadingSpinner from '../UI/LoadingSpinner';



const ProductsList = ({items,itemsLoading}) => {
    const {categoriesLoading} = useSelector(state => state.products);
    
    return (<section className={classes["products-area"]} id="products">
            {itemsLoading || categoriesLoading ? <LoadingSpinner />: 
            items.length > 0 ? 
            <Fragment>
                <div className={classes.products}>
                    {items.map(item => <ProductItem 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rate={item.rating.rate}
                        count={item.rating.count} />
                    )}
                </div>
            </Fragment> : ""} 
        </section>
    )
}

export default ProductsList