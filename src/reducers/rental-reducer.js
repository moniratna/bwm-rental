import {FETCH_RENTALS, FETCH_RENTALS_SUCCESS, FETCH_RENTAL_BY_ID_INIT, FETCH_RENTAL_BY_ID_SUCCESS} from '../actions/types';
const INTIAL_STATE = {
    rentals: {
        data:[]
    },
    rental: {
        data:{}
    }
}


export const rentalReducer = (state=INTIAL_STATE.rentals, action) =>{
    switch(action.type) {
        case FETCH_RENTALS_SUCCESS:
            return {...state, data:action.rentals}
        default:
            return state;
    }
}

export const selectedRentalReducer = (state=INTIAL_STATE.rental,action)=>{
    switch(action.type){
        case FETCH_RENTAL_BY_ID_INIT:
            return {...state, data:{}};
        case FETCH_RENTAL_BY_ID_SUCCESS:
            return Object.assign({}, state, {data:action.rental});
            // return {...state, data:action.renal}

        default:
            return state;
    }
}