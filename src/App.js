import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import * as redux from 'redux';
import {Provider} from 'react-redux';

import RentalList from './components/rental/RentalList';
import Header from './shared/Header';
import RentalDetails from './components/rental/RentalDetails';
import { Component } from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import * as actions from './actions';
import ProtectedRoutes from './shared/auth/ProtectedRoutes';
import LoggedInRoute from './shared/auth/LoggedInRoute';
import RentalSearchListing from './components/rental/RentalSearchListing';


const store = require('./reducers').init()


class App extends Component {

  componentWillMount(){
    this.checkAuthState();
  }
  checkAuthState(){
    store.dispatch(actions.checkAuthState());
  }

  logout(){
    store.dispatch(actions.logout());
  }



  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout} />
            <div className="container">
              <Route exact path='/' render={() => <Redirect to='/rentals' /> } />
              <Route exact path='/rentals' component={RentalList} />
              <Route exact path='/rentals/:city/homes' component={RentalSearchListing} />
              <ProtectedRoutes exact path='/rentals/:id' component={RentalDetails} />
              <Route exact path='/login' component={Login} />
              <LoggedInRoute exact path='/register' component={Register} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
      
      
    );
  }
}

export default App;
