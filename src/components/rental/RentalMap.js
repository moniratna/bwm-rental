import React, { Component } from 'react';
import { MapWithGeocode } from '../map/googleMap';


export default class RentalMap extends Component {
    render() {
        const location = this.props.location;
        // alert(location);
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfG8fbmZpykH28p7-aBsMtYaweChHDA8g&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `350px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}
