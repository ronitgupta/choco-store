import React from 'react';

import classes from './Product.module.css';
import ChocoFlower from '../../../assets/images/chocolate-flower.png';
import AddToCart from '../../../Elements/Button/Button';

const Product = props => {
    return (
        <div className={classes.Product}>
            <img className={classes.Image} src={ChocoFlower} />
            <p className={classes.Title}>Product One</p>
            <p className={classes.Price}>$300.00</p>
            <AddToCart link="http://google.com"/>
        </div>
    );
}

export default Product;