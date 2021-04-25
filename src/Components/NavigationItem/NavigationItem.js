import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/images/choco-logo.png';
import classes from './NavigationItem.module.css';
import * as actions from '../../Store/Actions';
import Backdrop from '../../Elements/Backdrop/Backdrop';

const NavigationItem = (props) =>{

    // Logout Action

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('expiresIn');
        props.logoutClicked();
    }

    // Modal

    const [showModal , setShowModal] = useState(false);

    const modalShowHide = () => {
        setShowModal(!showModal);
    }

    return (
        <React.Fragment>
            <div className={classes.NavigationItem}>
                    <NavLink activeClassName={classes.Logo} to="/"><img src={Logo} alt="Choco Logo"/></NavLink>
                    <a href="#products">Products</a>
                    <a href="#testimonials">Reviews</a>
                    <a href="#special">Special Offer</a>
                    <a href="#awards">Awards</a>
                    <a href="#history">About Us</a>
                    <a href="#news">News</a>
                    <a href="#contact-us">Contact Us</a>
                    {localStorage.getItem('token') !== null ?<Link to="/cart">Cart</Link>: null}
                    {localStorage.getItem('token') !== null ? 
                        <p onClick={logout}>Logout</p> 
                        :<p onClick={props.loginClicked} >Login/Sign Up</p>
                        }
            </div>

            <div onClick={modalShowHide} className={classes.MobileNav}>
                    <div className={classes.Menu}>
                        <div className={classes.MenuLine}></div>
                        <div className={classes.MenuLine}></div>
                        <div className={classes.MenuLine}></div>
                    </div>
                {showModal ?
                    <React.Fragment>
                        <Backdrop onClick={modalShowHide} show/>
                        <div className={classes.Modal}>
                            <NavLink activeClassName={classes.Logo} to="/"><img src={Logo} alt="Choco Logo"/></NavLink>
                            <a href="#products">Products</a>
                            <a href="#testimonials">Reviews</a>
                            <a href="#special">Special Offer</a>
                            <a href="#awards">Awards</a>
                            <a href="#history">About Us</a>
                            <a href="#news">News</a>
                            <a href="#contact-us">Contact Us</a>
                            {localStorage.getItem('token') !== null ?<Link to="/cart">Cart</Link>: null}
                            {localStorage.getItem('token') !== null ? 
                                <p onClick={logout}>Logout</p> 
                                :<p onClick={props.loginClicked} >Login/Sign Up</p>
                                }
                        </div>
                    </React.Fragment> :
                null}
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
