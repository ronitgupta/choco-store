import React from 'react';

import classes from './AboutChoco.module.css';

const AboutChoco = props => {
    return (
    <div className={classes.AboutChoco}>
        <section className={classes.Section}>
        <h2 className={classes.Heading}>Choco Origin!</h2>
        <p className={classes.Line}>__________</p>
        <p className={classes.Desc}>The store sources high quality coco near Ivory Coast port.
             These coco are premium and of organic nature and origin. 
            They are obtained from the seeds of the Theobroma cacao tree. 
            Cocoa powder is a solid that results from griding the seeds after the cocoa butter is extracted. 
            They are biodegradable which is healthy to environment.
            <br/>
            <br/>
            The powder is rich in antoxidants, substances that turn it into a superfood, 
            but are partially lost when cucoa powder is processed. Ivory Coast is the largest
             producer of cocoa followed by Ghana.
            </p>
        </section>
    </div>);
}

export default AboutChoco;