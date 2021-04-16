import React from 'react';

import classes from './History.module.css';

const History = props => {
    return (
        <div id="history" className={classes.main}>
            <div class={classes.history}>
                <div className={`${classes.box} ${classes.left}`}>
                    <div className={classes.content}>
                    <h2>2003</h2>
                    <p>Opened its first store at South Delhi.</p>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.right}`}>
                    <div className={classes.content}>
                    <h2>2004</h2>
                    <p> Two more stores opened at Civil Lines, New Delhi and Sector 13, Gurugram. </p>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.left}`}>
                    <div className={classes.content}>
                    <h2>2007</h2>
                    <p>Started catering business. Completed 103 Successful projects in less than a year. </p>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.right}`}>
                    <div className={classes.content}>
                    <h2>2013</h2>
                    <p>Online delivery started for New Delhi, Noida and Gurugram. Achived 800 Orders in the first 3 months.</p>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.left}`}>
                    <div className={classes.content}>
                    <h2>2015</h2>
                    <p>Launch of Mobile App availble on Google Play Store and Apple App Store</p>
                    </div>
                </div>
                
                </div>
        </div>
    );
}

export default History;