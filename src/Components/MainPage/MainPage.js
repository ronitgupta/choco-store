import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

import NavigationItem from '../NavigationItem/NavigationItem';
import Title from '../Title/Title';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';
import AboutChoco from '../AboutChoco/AboutChoco';
import Special from '../Special/Special';
import News from '../News/News';
import Awards from '../Awards/Awards';
import History from '../History/History';
import ContactUs from '../ContactUs/ContactUs';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

const MainPage = props => {

    //

    useEffect(() => {
        props.loginClicked ? 
        document.body.style.overflow = 'hidden' :
        document.body.style.overflow = 'initial';
    }, [props.loginClicked])


    return (
        <React.Fragment>
            <NavigationItem />
                {props.location.pathname === "/" ?
                <React.Fragment>
                    <Title />
                    <Products />
                    <Testimonials />
                    <Special />
                    <AboutChoco />
                    <Awards />
                    <History />
                    <News />
                    <ContactUs />
                </React.Fragment>
                : null}
            {props.loginClicked ? <Login /> : null}
            {localStorage.getItem('token') !== null  ? <Route path="/cart" component={Cart} exact />: <Redirect to="/" /> }
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loginClicked : state.loginClicked,
    authentication : state.authentication
});

export default connect(mapStateToProps)(withRouter(MainPage));