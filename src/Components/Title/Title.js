import React from 'react';

import classes from './Title.module.css';

const Title = props => {
    return (
        <div className={classes.Title}>
            <p className={classes.Heading}>Choco Store</p>
            <p className={classes.Description}>New Delhi's best selection of fresh, gourmet chocolate and chocolate gifts</p>
            <p className={classes.Line}>____</p>
            <button className={classes.Button}> OUR PRODUCTS</button>
        </div>
    )
}

export default Title;