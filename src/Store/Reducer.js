import * as actions from './Actions';
import axios from 'axios';

import updateObject from './Utility';

const initialState = {
    products : 0,
    specialProducts : 0,
    authentication: false,
    loginClicked : false,
    loginResponse : null,
    email : null,
    token : null
    
}

const reducer = (state= initialState, action) => {
    if(action.type === actions.INCREMENT && action.product === actions.NORMAL){
        if(state.products < 9){
            return updateObject(state, {products : state.products + 1});
        }
    }
    if(action.type === actions.INCREMENT && action.product === actions.SPECIAL){
        if(state.specialProducts < 9){
            return updateObject(state, {specialProducts : state.specialProducts + 1});
        }
    }
    if(action.type === actions.DECREMENT && action.product === actions.NORMAL){
        if(state.products > 0){
            return updateObject(state, {products : state.products - 1});
        }
    }
    if(action.type === actions.DECREMENT && action.product === actions.SPECIAL){
        if(state.specialProducts > 0){
            return updateObject(state,{specialProducts : state.specialProducts - 1});
        }
    }
    if(action.type === actions.LOGINCLICKED){
        return updateObject(state, {loginClicked : true});
    }
    if(action.type === actions.LOGINHIDE){
        return updateObject(state, {loginClicked : false});
    }

    if(action.type === actions.SIGNINGUP){
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSFNnEE9rA3UfYfI74kRo-3xaQ7_j4Aao",action.data)
            .then(response => {
                document.querySelector('#signup_button').style.display = "none";
                alert('SignUp Successful! Please Login');
            })
            .catch(err => {
                if(err.response){
                    if(err.response.data.error.code === 400){
                        alert('Email Already in Use!')
                        }
                    } else {
                        alert('Error Connecting!')
                    }
              });
    }

    if(action.type === actions.LOGIN){
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSFNnEE9rA3UfYfI74kRo-3xaQ7_j4Aao',action.data)
            .then(response => {
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('userId',response.data.localId);
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('expiresIn', new Date(new Date().getTime() + response.data.expiresIn * 1000));
            })
            .catch(err => {
                if(err.response){
                    if(err.response.data.error.message === 'INVALID_PASSWORD'){
                        alert('Invalid Password! Please check and enter correct Password');
                    }
                    if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
                        alert('Invalid Email! Please check and enter correct Email');
                    }
                } else {
                    alert('Error Connecting!');
                }
            })
        }
    if(action.type === actions.lOGOUTCLICKED){
        return updateObject(state, {
            email : null,
            token : null,
            authentication : false,
        });
    }
    if(action.type === actions.REMOVELOGIN ){
        return updateObject(state, {
            loginClicked : false,
            email: localStorage.getItem('email'),
            token : localStorage.getItem('token'),
            authentication: true
        });
    }
    return state;
}

export default reducer;