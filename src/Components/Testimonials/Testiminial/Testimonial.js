import React from 'react';

import classes from './Testimonial.module.css';
import TestimonialIcon from '../../../assets/images/testimonial-icon.jpg';

const Testimonial = props => {
    

    return(
        <div style={props.styling} className={classes.Testimonial}>
            <p className={classes.Desc}>{props.desc} </p>
            <img className={classes.Image}src={TestimonialIcon} />
            <p className={classes.Name}>{props.name}</p>
            <p className={classes.Location}>{props.location}</p>
        </div>
    );
}

export default Testimonial;