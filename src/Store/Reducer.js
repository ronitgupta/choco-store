import * as actions from './Actions';

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
    return state;
    
}

export default reducer;