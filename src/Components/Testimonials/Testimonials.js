import React from 'react';

import classes from './Testimonials.module.css';
import Testimonial from './Testiminial/Testimonial';

const Testimonials = props => {
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet maximus varius. Donec rhoncus magna ac enim lacinia, vel finibus nulla varius. Curabitur ornare eleifend.";

    const marginEffect = {
        marginLeft: "5vw"
    }

    return (
        <div className={classes.Testimonials} >
            <h1 className={classes.Title}>Testimonials</h1>
            <Testimonial 
                desc={desc}
                name="Nicole Brown"
                location="Vasant Vihar, New Delhi"
                />
            <Testimonial
                styling={marginEffect} 
                desc={desc}
                name="Ajit Kumar"
                location="Civil Lines, New Delhi"
                />
            <Testimonial 
                desc={desc}
                name="Neha Sharma"
                location="Dwarka, New Delhi"
                />
        </div>
    );
}

export default Testimonials;