import React, { Component } from 'react';
import RentalCard from './RentalCard';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RentalList extends Component {
    renderRentals() {
        return this.props.rentals.map((rental, index)=>{
            return (
                <RentalCard key={index} rental={rental} />
            )
        })
    }
    componentWillMount(){
        this.props.dispatch(actions.fetchRentals());
    }
    render() {
        return (
        <section id="rentalListing">
          <h1 className="page-title">Your Home All Around The World</h1>
          <div className="row">
              {/* we use this method regularly to map items */}
              {/* {this.state.rentals.map((rental)=>{
                  return <RentalCard />
              })} */}

              {/* clean method of map */}
              {this.renderRentals()}
            
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

export default connect(mapStateToProps)(RentalList)