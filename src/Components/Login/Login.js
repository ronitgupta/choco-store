import React, { useState } from 'react';
import {connect} from 'react-redux';

import Backdrop from '../../Elements/Backdrop/Backdrop';
import classes from './Login.module.css';
import * as actions from '../../Store/Actions';

const Login = props => {

    // SignUp Password Validator
    
    const [validPassword, setValidPassword] = useState(null)

    const passwordValidator = () => {
        const signupButton = document.querySelector('#signup_button');
        const signupPassword = document.querySelector('#signup_password').value;
        const confirmPassword = document.querySelector('#confirm_password').value;
            if(signupPassword === confirmPassword){
                signupButton.disabled = false;
                setValidPassword((<span className={classes.Match}>Password Match!</span>)); 
            } else {
                signupButton.disabled = true;
                setValidPassword((<span className={classes.UnMatch}>Password Doesn't Match!</span>));
            }
    }
    
    // Login & SignUp Switch

    const [SwitchSignUp , setSwitchSignUp] = useState({switchSignUp : false});

    let form = null;

    if(SwitchSignUp.switchSignUp){
        form = (
                <form>
                    <label for="signup_email">Email Address</label>
                    <input id="signup_email" placeholder="Enter Email Address" required type="email" />
                    <label for="signup_password">Password</label>
                    <input id ="signup_password" placeholder="Enter Password" required type="password"  />
                    <label for="confirm_password">Confirm Password</label>
                    <input 
                        onChange={passwordValidator} 
                        id ="confirm_password" 
                        placeholder="Enter Password Again" 
                        required type="password" />{validPassword}
                    <input id="signup_button" type="submit" disabled value="SignUp" />
                </form>
            )
    } else {
        form = (
            <form>
                <label for="email">Email Address</label>
                <input id="email" placeholder="Enter Email Address" required type="email" />
                <label for="login_password">Password</label>
                <input id="login_password" placeholder="Password" required type="password"  />
                <input type="submit" value="Login" />
            </form>
            )
    }

    const switchHandle = () => {
        setSwitchSignUp({switchSignUp : !SwitchSignUp.switchSignUp})
    }

    // JSX
    
    return (
        <React.Fragment>
            <div onClick={props.hideLogin}><Backdrop show /></div>
            <div className={classes.Login}>
                <p onClick={switchHandle}>Switch to Customer {SwitchSignUp.switchSignUp? "Login": "SignUp"}</p>
                {form}
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    hideLogin : () => dispatch({type : actions.LOGINHIDE}),
})

export default connect(null,mapDispatchToProps)(Login);