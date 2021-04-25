import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NORMAL = 'NORMAL';
export const SPECIAL = 'SPECIAL';
export const LOGINCLICKED = 'LOGINCLICKED';
export const LOGINHIDE = 'LOGINHIDE';
export const SIGNUPALERTNULL = 'SIGNUPALERTNULL';
export const LOGINALERTNULL = 'LOGINALERTNULL';
export const lOGOUTCLICKED = 'LOGOUTCLiCKED';
export const REMOVELOGIN = 'REMOVELOGIN';
export const LOGINFAIL = 'LOGINFAIL';
export const LOGINSUCCESS = 'LOGINSUCCESS';

export const SIGNINGUP = (data) => {
    return dispatch => {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSFNnEE9rA3UfYfI74kRo-3xaQ7_j4Aao",data)
        .then(response => {
            document.querySelector('#signup_button').style.display = "none";
            dispatch({type : SIGNINGUP, alertValue : 'SignUp Successful! Please Login'});
        })
        .catch(err => {
            if(err.response){
                if(err.response.data.error.code === 400){
                    dispatch({type : SIGNINGUP, alertValue : 'Email Already in Use!'});
                    }
                } else {
                    dispatch({type : SIGNINGUP, alertValue : 'Error Connecting!'});
                }
          });
    }
}

export const LOGIN = (data) => {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSFNnEE9rA3UfYfI74kRo-3xaQ7_j4Aao',data)
        .then(response => {
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('email',response.data.email);
            dispatch({type : LOGINSUCCESS,
                token : response.data.idToken,
                email : response.data.email,
                alertValue : 'Successful Login!'
            });
        })
        .catch(err => {
            if(err.response){
                if(err.response.data.error.message === 'INVALID_PASSWORD'){
                    dispatch({type : LOGINFAIL, alertValue : 'Invalid Password! Please check and enter correct Password'});
                }
                if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
                    dispatch({type : LOGINFAIL, alertValue : 'Invalid Email! Please check and enter correct Email'});
                }
            } else {
                dispatch({type : LOGINFAIL, alertValue : 'Error Connecting!'});
            }
        })
    }
}