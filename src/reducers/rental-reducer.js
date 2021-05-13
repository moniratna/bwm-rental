import {FETCH_RENTALS, FETCH_RENTAL_BY_ID} from '../actions/types';
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
        case FETCH_RENTALS:
            return {...state, data:action.rentals}
        default:
            return state;
    }
}

export const selectedRentalReducer = (state=INTIAL_STATE.rental,action)=>{
    switch(action.type){
        case FETCH_RENTAL_BY_ID:
            return Object.assign({}, state, {data:action.rental});
            // return {...state, data:action.renal}

        default:
            return state;
    }
}