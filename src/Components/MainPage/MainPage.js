import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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

const MainPage = props => {

    useEffect(() => {
        props.loginClicked ? 
        document.body.style.overflow = 'hidden' :
        document.body.style.overflow = 'initial';
    }, [props.loginClicked])

    return (
        <React.Fragment>
            <NavigationItem />
            <Title />
            <Products />
            <Testimonials />
            <Special />
            <AboutChoco />
            <Awards />
            <History />
            <News />
            <ContactUs />
            {props.loginClicked ? <Login /> : null}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loginClicked : state.loginClicked,
});

export default connect(mapStateToProps)(MainPage);