import moment from 'moment';
import React from 'react';
// import rental from '../../../server/models/rental';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { getRangeOfDates } from '../../helpers';

export class Booking extends React.Component {
  constructor(){
    super();
    this.bookedOutDates = [];

    this.checkInvalidDates = this.checkInvalidDates.bind(this);
  }
  componentWillMount(){
    this.getBookedOutDates();
  }
  getBookedOutDates(){
    const {bookings} = this.props.rental;
    if(bookings && bookings.length > 0) {
      bookings.forEach(booking=> {
        const dateRange = getRangeOfDates(booking.startAt, booking.endAt, 'Y/MM/DD');
        this.bookedOutDates.push(...dateRange);
        console.log(this.bookedOutDates);
      });
    }
  }
  checkInvalidDates(date) {
    return this.bookedOutDates.includes(date.format('Y/MM/DD')) || date.diff(moment(), 'days') < 0;
  }

  render() {
    const {rental} = this.props;
    return (
      <div className='booking'>
        <h3 className='booking-price'>${rental.dailyRate} <span className='booking-per-night'>per night</span></h3>
        <hr></hr>
        <div className='form-group'>
        <label htmlFor='dates'>Dates</label>
          <DateRangePicker isInvalidDate={this.checkInvalidDates} opens='left' containerStyles={{display: 'block'}}>
            <input id='dates' type='text' className='form-control'></input>
          </DateRangePicker>
        </div>
        <div className='form-group'>
          <label htmlFor='guests'>Guests</label>
          <input type='number' className='form-control' id='guests' aria-describedby='emailHelp' placeholder=''></input>
        </div>
        <button className='btn btn-bwm btn-confirm btn-block'>Reserve place now</button>
        <hr></hr>
        <p className='booking-note-title'>People are interested into this house</p>
        <p className='booking-note-text'>
          More than 500 people checked this rental in last month.
        </p>
      </div>
    )
  }
}
