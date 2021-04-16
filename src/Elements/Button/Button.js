import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return (<div onclick={props.buttonClicked}>
        <a href={props.link}>
            <button className={classes.AddToCart}>Add to Cart</button>
        </a>
    </div>);
}

export default Button;