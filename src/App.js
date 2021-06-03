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


const store = require('./reducers').init()


class App extends Component {

  componentWillMount(){
    this.checkAuthState();
  }
  checkAuthState(){
    store.dispatch(actions.checkAuthState());
  }



  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path='/' render={() => <Redirect to='/rentals' /> } />
              <Route exact path='/rentals' component={RentalList} />
              <Route exact path='/rentals/:id' component={RentalDetails} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
      
      
    );
  }
}

export default App;
