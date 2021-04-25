import React from 'react';

import classes from './Products.module.css';
import Product from './Product/Product';

const Products = props => {
    return(
        <div id="products" className={classes.Products}>
            <h1 className={classes.Heading}>Products</h1>
            <p className={classes.Line}>_______</p>
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default Products;