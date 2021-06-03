import axios from 'axios';
import authService from '../services/auth-service'
import axiosService from '../services/axios-service';
import {FETCH_RENTALS,
        FETCH_RENTAL_BY_ID_SUCCESS,
        FETCH_RENTAL_BY_ID_INIT,
        FETCH_RENTALS_SUCCESS,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
        LOGOUT } from './types';

// renals actions

const axiosInstance = axiosService.getInstance();


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
    axiosInstance.get('/rentals')
    .then(res => res.data)
    .then(rentals =>(dispatch(fetchRentalSuccess(rentals)))
    );
  }
}


export const fetchRentalById = (rentalId) =>{

  return function(dispatch){
    dispatch(fetchRentalByIdInit());

    axios.get(`/api/v1/rentals/${rentalId}`)
    .then(res => res.data)
    .then(rental => dispatch(fetchRentalByIdSuccess(rental))
    );
  }
    
}

// auth actions
export const register = (username, email, password, passwordConfirmation) => {
  const body = {username, email, password, passwordConfirmation}
  console.log(body);
  return axios.post('/api/v1/users/register',body).then(
    (res) => {
      return res.data;
    },
    (err) => {
      return Promise.reject(err.response.data.errors)
    }
  )
}

const loginSuccess = () =>{
  return{
    type: LOGIN_SUCCESS,
  }
}
const loginFailure = (errors) =>{
  return{
    type: LOGIN_FAILURE,
    errors
  }
}

export const checkAuthState = () =>{
  return dispatch => {
    if(authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (email,password) => {
  const body = {email, password}

  return dispatch => {
    return axios.post('api/v1/users/auth', body)
    .then(res =>res.data)
    .then(token=>{
      authService.saveToken(token)
      dispatch(loginSuccess());
    })
    .catch(({response})=>{
      dispatch(loginFailure(response.data.errors));
    })
  }
}
export const logout = () => {
  authService.invalidateUser();
  return {
    type: LOGOUT,
  }
}