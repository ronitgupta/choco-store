import React from 'react';

import classes from './Products.module.css';
import Product from './Product/Product';

const Products = props => {
    return(
        <div className={classes.Products}>
            <h1 className={classes.Heading}>Products</h1>
            <p className={classes.Line}>_______</p>
            <p className={classes.Left}>V</p>
            <Product />
            <Product />
            <Product />
            <p className={classes.Right}>U</p>
        </div>
    );
}

export default Products;