import React from 'react';

import classes from './News.module.css';
import NewsPic from '../../assets/images/news.jpg';

const News = props => {
    return(
        <div className={classes.News}>
            <p className={classes.Title}>news</p>
            <p className={classes.Line}>_____</p>
            
            <div className={classes.container}>
                <span>Left</span>
                <a href="http://en.wikipedia.org/">
                    <img className={classes.Image} src={NewsPic} />
                    <p>Something Something</p>
                </a>
                <a href="http://en.wikipedia.org/">
                    <img className={classes.Image} src={NewsPic} />
                    <p>Something Something</p>
                </a>
                <a href="http://en.wikipedia.org/">
                    <img className={classes.Image} src={NewsPic} />
                    <p>Something Something Something Something</p>
                </a>
                <span>Right</span>
            </div>
            
        </div>
    );
}

export default News;