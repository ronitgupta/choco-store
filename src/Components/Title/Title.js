import React from 'react';

import classes from './Title.module.css';

const Title = props => {
    return (
        <div id="title" className={classes.Title}>
            <p className={classes.Heading}>Choco Store</p>
            <p className={classes.Description}>New Delhi's best selection of fresh, gourmet chocolate and chocolate gifts</p>
            <p className={classes.Line}>____</p>
            <button className={classes.Button}> <a href="#products">OUR PRODUCTS</a> </button>
        </div>
    )
}

export default Title;