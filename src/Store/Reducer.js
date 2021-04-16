import * as actions from './Actions';

const initialState = {
    products : 0,
    specialProducts : 0,
    authentication: false,
    loginClicked : false,
    
}

const reducer = (state= initialState, action) => {
    if(action.type === actions.INCREMENT && action.product === actions.NORMAL){
        return {
            ...state,
            products : state.products + 1
        }
    }
    if(action.type === actions.INCREMENT && action.product === actions.SPECIAL){
        return {
            ...state,
            specialProducts : state.specialProducts + 1
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