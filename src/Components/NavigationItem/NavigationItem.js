import React from 'react';
import { connect } from 'react-redux';

import Logo from '../../assets/images/choco-logo.png';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) =>{
    return (
    <div className={classes.NavigationItem}>
        <img src={Logo} alt="Choco Logo"/>
        <a href="#">Products</a>
        <a href="#">Reviews</a>
        <a href="#">Special Offer</a>
        <a href="#">Awards</a>
        <a href="#">About Us</a>
        <a href="#">News</a>
        <a href="#">Contact Us</a>
        <a href="#">Cart</a>
        <a href="#">Login</a>
    </div>
    );
}

const mapStateToProps = state => ({
    ctr : state.counter
})

export default connect(mapStateToProps)(NavigationItem);
