import React, { useState } from 'react';
import {connect} from 'react-redux';

import Backdrop from '../../Elements/Backdrop/Backdrop';
import classes from './Login.module.css';
import * as actions from '../../Store/Actions';

const Login = props => {

    // Retreving Login Data

    const loginData = e =>{
        e.preventDefault();
        const loginEmail = document.querySelector('#login_email').value;
        const loginpassword = document.querySelector('#login_password').value;
        const dataPacket = {
            email : loginEmail,
            password : loginpassword,
            returnSecureToken : true
        }
        props.login(dataPacket);
        props.removeLogin();   
    }

  
    // Retreving Signup Data
    
    const signupData = e => {
        e.preventDefault();
        const signupEmail = document.querySelector('#signup_email').value;
        const signupPassword = document.querySelector('#confirm_password').value;
        const dataPacket = {
            email : signupEmail,
            password : signupPassword,
            returnSecureToken : true
        }
        props.signup(dataPacket);
    }

    // SignUp Password and Confirm Password Validator
    
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

    // SignUp Password Regex Check

    const [goodPassword , setGoodPassword] = useState(null);

    const passwordRegex = () => {

        const password = document.querySelector('#signup_password').value;
        if(password.length < 8){
            setGoodPassword(<span className={classes.PasswordRegex}>Password Must be atleast 8 characters</span>);
            document.querySelector('#confirm_password').disabled = true;
        } else{
            setGoodPassword(<span className={classes.GoodPassword}>Good Password</span>)
            document.querySelector('#confirm_password').disabled = false;
        }
        passwordValidator();
    }
    
    // Login & SignUp Switch

    const [SwitchSignUp , setSwitchSignUp] = useState(false);

    let form = null;

    if(SwitchSignUp){
        form = (
                <form onSubmit={signupData}>
                    <label for="signup_email">Email Address</label>
                    <input id="signup_email" placeholder="Enter Email Address" required type="email" />
                    <label for="signup_password">Password</label>
                    <input 
                        onChange={passwordRegex} 
                        id ="signup_password" 
                        placeholder="Enter Password" 
                        required 
                        type="password"  />{goodPassword}
                    <label for="confirm_password">Confirm Password</label>
                    <input 
                        onChange={passwordValidator} 
                        id ="confirm_password"
                        disabled 
                        placeholder="Enter Password Again" 
                        required type="password" />{validPassword}
                    <input id="signup_button" type="submit" disabled value="SignUp" />
                </form>
            )
    } else { 
        form = (
            <form onSubmit={loginData}>
                <label for="email">Email Address</label>
                <input id="login_email" placeholder="Enter Email Address" required type="email" />
                <label for="login_password">Password</label>
                <input id="login_password" placeholder="Password" required type="password"  />
                <input type="submit" value="Login" />
            </form>
            )
    }

    const switchHandle = () => {
        setSwitchSignUp(!SwitchSignUp)
    }

    // JSX
    
    return (
        <React.Fragment>
            <div onClick={props.hideLogin}><Backdrop show /></div>
            <div className={classes.Login}>
                <p onClick={switchHandle}>Switch to Customer {SwitchSignUp? "Login": "SignUp"}</p>
                {form}
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    hideLogin : () => dispatch({type : actions.LOGINHIDE}),
    signup : (dataPacket) => dispatch({type : actions.SIGNINGUP, data : dataPacket}),
    login : (dataPacket) => dispatch({type : actions.LOGIN, data : dataPacket}),
    removeLogin : () => dispatch({type : actions.REMOVELOGIN}),
})

export default connect(null,mapDispatchToProps)(Login);