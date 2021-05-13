import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import * as redux from 'redux';
import {Provider} from 'react-redux';

import RentalList from './components/rental/RentalList';
import Header from './shared/Header';
import RentalDetails from './components/rental/RentalDetails';
import { Component } from 'react';

const store = require('./reducers').init()


class App extends Component {
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
            </div>
          </div>
        </BrowserRouter>
      </Provider>
      
      
    );
  }
}

export default App;
