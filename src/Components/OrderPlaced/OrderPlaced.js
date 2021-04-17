import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import BackDrop from '../../Elements/Backdrop/Backdrop';
import classes from './OrderPlaced.module.css';

const OrderPlaced = props => {

    // Price Calculator
    let price = (props.choco * 199 ) + (props.specialChoco * 299)

    return (
        <React.Fragment>
            <BackDrop show />
            <div className={classes.OrderPlaced}>
            {props.choco > 0 || props.specialChoco > 0 ? <h2>Order Successfully Placed</h2> : null }
            {props.choco === 0 && props.specialChoco === 0 ? <h2>Empty Cart</h2> : null }
            <NavLink to="/" activeClassName={classes.HomePage}>Return to HomePage</NavLink>
                <div className={classes.Summary}>
                {props.choco > 0 || props.specialChoco > 0 ? <p className={classes.Title}>Summary</p> : null}
                    {props.choco > 0? <p>Choco : <span>{props.choco}</span></p> : null}
                    {props.specialChoco > 0?<p>Special Choco : <span>{props.specialChoco}</span></p>: null}
                    {props.choco > 0 || props.specialChoco > 0 ? <p>Total Paid: <span>${price}.00</span></p> : null}
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    choco : state.products,
    specialChoco : state.specialProducts
});

export default connect(mapStateToProps)(OrderPlaced);