import React, { Component } from 'react';
import RentalCard from './RentalCard';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RentalSearchListing extends Component {
    constructor(){
        super();
        this.state = {
            searchedCity: ''
        }
    }
    renderRentals() {
        // return this.props.rentals.map((rental, index)=>{
        //     return (
        //         <RentalCard key={index} rental={rental} />
        //     )
        // })
    }
    componentWillMount(){
        const searchedCity = this.props.match.params.city;
        this.setState({searchedCity});
        this.props.dispatch(actions.fetchRentals());
    }
    render() {
        return (
        <section id="rentalListing">
          <h1 className="page-title">Your Home in {this.state.searchedCity} </h1>
          <div className="row">
              {/* we use this method regularly to map items */}
              {/* {this.state.rentals.map((rental)=>{
                  return <RentalCard />
              })} */}

              {/* clean method of map */}
              {/* {this.renderRentals()} */}
            
          </div>
        </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect()(RentalSearchListing)