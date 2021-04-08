import React from 'react';

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

const MainPage = () => {
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
        </React.Fragment>
    );
}

export default MainPage;