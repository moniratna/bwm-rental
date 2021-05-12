import React, { Component } from 'react'

export default class RentalDetails extends Component {
    render() {
        return (
            <div>
                <h1>Hello from rental details{this.props.match.params.id}</h1>
            </div>
        )
    }
}
