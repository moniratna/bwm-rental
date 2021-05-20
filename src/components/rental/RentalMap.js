import React, { Component } from 'react';
import { MapWithGeocode } from '../map/googleMap';


export default class RentalMap extends Component {
    render() {
        const location = this.props.location;
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmsu7mBjQTL40GHTFBI98TpZQFUQlhmjw&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `350px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}
