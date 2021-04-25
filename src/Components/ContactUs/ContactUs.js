import React from 'react';

import classes from './ContactUs.module.css';

const ContactUs = props => {

    let rowsNumber = 10;
    if(window.innerWidth <= 600){rowsNumber = 7} 

    // Contact Submitted

    const infoSubmitted = () => {
        const name = document.querySelector('#name').value;
        alert(`${name} Your Message has been sent! `)
    }

    return(
        <div id="contact-us" className={classes.ContactUs}>
            <h2 className={classes.Heading}>Contact Us</h2>
            <p className={classes.Line}>______</p>
            <form className={classes.Form} onSubmit={infoSubmitted}>
                <label className={classes.Label} for="name">Full Name:</label>
                <input required type="text" id="name" placeholder="Name" />
                <label className={classes.Label} for="email">E-mail Address:</label>
                <input required placeholder="E-Mail" id="email" type="email" />
                <label className={classes.Label} for="message">Message:</label>
                <textarea rows={rowsNumber} id="message" placeholder="Message..." maxLength="2000" required  />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ContactUs;