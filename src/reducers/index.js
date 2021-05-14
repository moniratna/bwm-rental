import * as redux from 'redux';
import thunk from 'redux-thunk';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';


export const init = () =>{
    const reducer = redux.combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer
    });


    const store =redux.createStore(reducer, redux.applyMiddleware(thunk));

    return store;
}