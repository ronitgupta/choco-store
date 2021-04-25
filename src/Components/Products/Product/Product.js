import React from 'react';
import { connect } from 'react-redux';

import classes from './Product.module.css';
import ChocoFlower from '../../../assets/images/chocolate-flower.png';
import * as actions from '../../../Store/Actions';
import Button from '../../../Elements/Button/Button';

const Product = props => {


    return (
        <div className={classes.Product}>
            <img className={classes.Image} alt="chocolate flower"  src={ChocoFlower} />
            <p className={classes.Title}>Product One</p>
            <p className={classes.Price}>$199.00</p>
            <div onClick={props.productIncrement}><Button text="Add to Cart" /></div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    productIncrement : () => dispatch({type : actions.INCREMENT, product : actions.NORMAL}),
});

export default connect(null,mapDispatchToProps)(Product);