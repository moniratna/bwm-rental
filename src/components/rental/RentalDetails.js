import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import RentalDetailInfo from '../rentaldetails/RentalDetailInfo';
import RentalMap from './RentalMap';


class RentalDetails extends Component {
    componentWillMount(){
        const rentalId = this.props.match.params.id
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    getLocation(pos) {
        let succeed = function(pos){
            console.log(pos.coords);
        }
        let failure = function(err){
            console.log(err);
        }
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge:0
        };
        navigator.geolocation.getCurrentPosition(succeed,failure, options)
    }
    render() {
        const rental = this.props.rental;
        if(rental._id) {
            return (
                <div>
                    <section id='rentalDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                        <div className='col-md-6'>
                            <img src={rental.image} alt=''></img>
                        </div>
                        
                        <div className='col-md-6'>
                        <RentalMap location={`${rental.city}, ${rental.street}`} />
                        </div>
                        </div>
                    </div>

                    <div className='details-section'>
                        <div className='row'>
                        <div className='col-md-8'>
                            <RentalDetailInfo rental= {rental} />
                        </div>
                        <div className='col-md-4'> BOOKING</div>
                        </div>
                    </div>
                </section>
                </div>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetails)