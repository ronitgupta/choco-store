import * as actions from './Actions';

import updateObject from './Utility';

const initialState = {
    products : 0,
    specialProducts : 0,
    authentication: false,
    loginClicked : false,
    loginResponse : null,
    email : null,
    token : null,
    signupAlert : null,
    loginAlert : null,
    
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
        return updateObject(state,{signupAlert : action.alertValue});
    }
    if(action.type === actions.LOGINFAIL){
        return updateObject(state, {
            loginAlert : action.alertValue,
        });
    }
    if(action.type === actions.LOGINSUCCESS){
        return updateObject(state, {
            authentication : true,
            email: action.email,
            loginClicked : false,
            loginAlert : action.alertValue,
            token: action.token
        })
    }
    if(action.type === actions.lOGOUTCLICKED){
        return updateObject(state, {
            email : null,
            token : null,
            authentication : null,
            loginAlert : null,
            signupAlert : null,

        });
    }
    if(action.type === actions.LOGINALERTNULL){
        return updateObject(state, {loginAlert : null});
    }
    if(action.type === actions.SIGNUPALERTNULL){
        return updateObject(state, {signupAlert : null});
    }
    return state;
}

export default reducer;