import {LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} from '../actions/types';
const INTIAL_STATE = {
    isAuth: false,
    errors: []
}


export const authReducer = (state=INTIAL_STATE, action) =>{
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {isAuth:true,errors:[]});
        case LOGIN_FAILURE:
            return Object.assign({},state, {errors: action.errors});
        case LOGOUT:
            return Object.assign({},state,{isAuth: false});
        default:
            return state;
    }
}