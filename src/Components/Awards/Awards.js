import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faSmile, faUserFriends,faAward } from '@fortawesome/free-solid-svg-icons';

import classes from './Awards.module.css';

const Awards = props => {
    return(
        <div id="awards" className={classes.Awards}>
            <section>
                <p><FontAwesomeIcon icon={faTasks} /></p>
                <p className={classes.Number}>250</p>
                <p className={classes.Desc}>Projects Finished</p>
            </section>
            <section>
                <p><FontAwesomeIcon icon={faUserFriends} /></p>
                <p className={classes.Number}>28225</p>
                <p className={classes.Desc}>People Served</p>
            </section>
            <section>
                <p><FontAwesomeIcon icon={faAward} /></p>
                <p className={classes.Number}>36</p>
                <p className={classes.Desc}>Awards Won</p>
            </section>
            <section>
                <p><FontAwesomeIcon icon={faSmile} /></p>
                <p className={classes.Number}>1140</p>
                <p className={classes.Desc}>Satisfied Clients</p>
            </section>
        </div>
    );
}

export default Awards;