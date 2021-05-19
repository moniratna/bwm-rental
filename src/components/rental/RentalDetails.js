import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { MapWithAMarker } from '../map/googleMap';
import RentalDetailInfo from '../rentaldetails/RentalDetailInfo';


class RentalDetails extends Component {
    componentWillMount(){
        const rentalId = this.props.match.params.id
        this.props.dispatch(actions.fetchRentalById(rentalId));
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
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmsu7mBjQTL40GHTFBI98TpZQFUQlhmjw&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `350px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
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