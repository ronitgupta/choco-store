import React from 'react';

import classes from './Special.module.css';
import PremiumChoco from '../../assets/images/premium-choco.png';
import Button from '../../Elements/Button/Button';

const Special = props => {
    return(
        <div className={classes.Special}>
            <h2>Special!</h2>
            <p className={classes.Line}>______</p>
            <div className={classes.Container}>
                <img className={classes.Image} src={PremiumChoco} />
                <div className={classes.About}>
                    <p className={classes.Title}>Choco Box</p>
                    <p className={classes.Desc}>Choco Box has all the fines chocolates which can turn your mood
                        . It has 4 varity of delicious sweets. Available in limited quantities
                        it is a perfect box to gift to your loved ones.
                    </p>
                    <p className={classes.Timer}>
                        <p className={classes.Block}>888<p>Days</p></p>
                        <p className={classes.Block}>23<p>Hr</p></p>
                        <p className={classes.Block}>59<p>Min</p></p>
                        <p className={classes.Block}>59<p>Sec</p></p>
                            </p>
                    <p className={classes.Price}>$499.00</p>
                    <div className={classes.Button}><Button/></div>
                </div>
            </div>
        </div>
    );
}

export default Special;