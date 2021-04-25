import React from 'react';

import classes from './News.module.css';
import NewsPic from '../../assets/images/news.jpg';

const News = props => {
    return(
        <div className={classes.News}>
            <p className={classes.Title}>news</p>
            <p className={classes.Line}>_____</p>
            
            <div id="news" className={classes.container}>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Chocolate">
                    <img className={classes.Image} alt="News Thumbnail" src={NewsPic} />
                    <p>Something Something</p>
                </a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Chocolate">
                    <img className={classes.Image} alt="News Thumbnail" src={NewsPic} />
                    <p>Something Something</p>
                </a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Chocolate">
                    <img className={classes.Image} alt="News Thumbnail" src={NewsPic} />
                    <p>Something Something Something Something</p>
                </a>
            </div>
            
        </div>
    );
}

export default News;