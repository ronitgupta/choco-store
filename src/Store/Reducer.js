import * as actions from './Actions';
import axios from 'axios';

const initialState = {
    products : 0,
    specialProducts : 0,
    authentication: false,
    loginClicked : false,
    
}

const reducer = (state= initialState, action) => {
    if(action.type === actions.INCREMENT && action.product === actions.NORMAL){
        if(state.products < 9){
            return {
                ...state,
                products : state.products + 1
            }
        }
    }
    if(action.type === actions.INCREMENT && action.product === actions.SPECIAL){
        if(state.specialProducts < 9){
            return {
                ...state,
                specialProducts : state.specialProducts + 1
            }
        }
    }
    if(action.type === actions.DECREMENT && action.product === actions.NORMAL){
        if(state.products > 0){
            return {
                ...state,
                products : state.products - 1
            }
        }
    }
    if(action.type === actions.DECREMENT && action.product === actions.SPECIAL){
        if(state.specialProducts > 0){
            return {
                ...state,
                specialProducts : state.specialProducts - 1
            }
        }
    }
    if(action.type === actions.LOGINCLICKED){
        return {
            ...state,
            loginClicked : true
        }
    }
    if(action.type === actions.LOGINHIDE){
        return{
            ...state,
            loginClicked : false
        }
    }
    if(action.type === actions.SIGNINGUP){
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSFNnEE9rA3UfYfI74kRo-3xaQ7_j4Aao",action.data)
            .then(response => {
                document.querySelector('#signup_button').style.display = "none";
                alert('SignUp Successful! Please Login');
            })
            .catch(err => {
                if(err.response.data.error.message){
                    alert('Email Already in Use!')
                }
              });
    }
    return state;
}

export default reducer;