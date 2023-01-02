import classes from './ProductItem.module.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';



const ProductItem = (props) => {
    const price = `$${props.price?.toFixed(2)}`;

    return (
        <Card className={classes.product}>
            <img src={props.image} loading="lazy" alt='product_image' />
            <h3>{props.title}</h3>
            <p className={classes.price}>{price}</p>
            <Link className={`${classes["details-btn"]} btn`} to={`/productDetails/${props.id}`}>More Details</Link>
            <div className={classes.rating}>
                <p>
                <span className={classes.rate}>{props.rate}</span>
                <span className={classes["star-icon"]}><FaStar/></span> 
                </p>
                ({props.count})
            </div>
        </Card>
    )
}

export default ProductItem