import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";


import RentalList from './components/rental/RentalList';
import Header from './shared/Header';
import RentalDetails from './components/rental/RentalDetails';

function App() {
  return (
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
    
  );
}

export default App;
