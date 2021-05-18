import axios from 'axios';
import {FETCH_RENTALS,
        FETCH_RENTAL_BY_ID_SUCCESS,
        FETCH_RENTAL_BY_ID_INIT,
        FETCH_RENTALS_SUCCESS } from './types';


const fetchRentalByIdInit = () =>{
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}
const fetchRentalByIdSuccess= (rental) =>{
  return {
    type:FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}
const fetchRentalSuccess = (rentals) =>{
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

export const fetchRentals = () =>{
  return dispatch =>{
    axios.get('/api/v1/rentals').then((rentals)=>{
    dispatch(fetchRentalSuccess(rentals.data))
    })
  }
}


export const fetchRentalById = (rentalId) =>{

  return function(dispatch){
    dispatch(fetchRentalByIdInit());

    axios.get(`/api/v1/rentals/${rentalId}`).then((rental)=>{
      dispatch(fetchRentalByIdSuccess(rental.data));
    })
  }
    
}
