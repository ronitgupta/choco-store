import React from 'react';
import { connect } from 'react-redux';

import Logo from '../../assets/images/choco-logo.png';
import classes from './NavigationItem.module.css';
import * as actions from '../../Store/Actions';

const NavigationItem = (props) =>{

    return (
        <React.Fragment>
            <div className={classes.NavigationItem}>
                <div className={classes.Menu}>
                    <div className={classes.MenuLine}></div>
                    <div className={classes.MenuLine}></div>
                    <div className={classes.MenuLine}></div>
                </div>
                <img src={Logo} alt="Choco Logo"/>
                <a href="#products">Products</a>
                <a href="#testimonials">Reviews</a>
                <a href="#special">Special Offer</a>
                <a href="#awards">Awards</a>
                <a href="#history">About Us</a>
                <a href="#news">News</a>
                <a href="#contact-us">Contact Us</a>
                <a href="/cart">Cart</a>
                {props.isAuthenticated ? 
                    <p>Logout</p> 
                    :<p onClick={props.loginClicked} >Login/Sign Up</p>
                    }
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    isAuthenticated : state.authentication
})

const mapDispatchToProps = dispatch => ({
    loginClicked : () => dispatch({type : actions.LOGINCLICKED})
});

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItem);
