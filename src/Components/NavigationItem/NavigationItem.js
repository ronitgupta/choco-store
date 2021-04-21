import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/choco-logo.png';
import classes from './NavigationItem.module.css';
import * as actions from '../../Store/Actions';

const NavigationItem = (props) =>{

    // Logout Action

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('expiresIn');
        props.logoutClicked();
    }

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
                {props.isAuthenticated?<Link to="/cart">Cart</Link>: null}
                {props.isAuthenticated ? 
                    <p onClick={logout}>Logout</p> 
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
    loginClicked : () => dispatch({type : actions.LOGINCLICKED}),
    logoutClicked : () => dispatch({type : actions.lOGOUTCLICKED})
});

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItem);
