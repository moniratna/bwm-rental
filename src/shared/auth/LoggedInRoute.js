import React from 'react';
import {Route, Redirect } from "react-router-dom";
import authService from '../../services/auth-service';

export default function LoggedInRoute(props) {
    const {component, ...rest} = props;
    return (
        <Route {...rest} render={(props)=> authService.isAuthenticated() ? 
            <Redirect to={{pathname:'/rentals'}} />
            :
            <component {...props} {...rest} />  } />
    )
}
