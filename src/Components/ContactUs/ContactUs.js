import React from 'react';

import classes from './ContactUs.module.css';

const ContactUs = props => {
    return(
        <div className={classes.ContactUs}>
            <h2 className={classes.Heading}>Contact Us</h2>
            <p className={classes.Line}>______</p>
            <form className={classes.Form}>
                <label className={classes.Label} for="name">Full Name:</label>
                <input required type="text" id="name" placeholder="Name" />
                <label className={classes.Label} for="email">E-mail Address:</label>
                <input required placeholder="E-Mail" id="email" type="email" />
                <label className={classes.Label} for="message">Message:</label>
                <textarea rows={10} id="message" placeholder="Message..." maxLength="2000" required 
 />
            </form>
        </div>
    );
}

export default ContactUs;