const Booking = require('../models/bookings');
const Rental = require('../models/rental');
const { normalizeErrors } = require('../helpers/mongoose');



exports.createBooking = function(req,res) {
    const {startAt, endAt, totalPrice, guests, days, rental } = req.body;
    const user = res.locals.user;

    const booking = new Booking({startAt, endAt,totalPrice, guests, days});
    Rental.findById(rental._id)
          .populate('bookings')
          .populate('user')
          .exec(function(err, foundRental){
              
        if(err) {
            return res.status(422).send({errors: normalizeErrors(err.errors)});
            }
        if(foundRental.user.id === user.id) {
            return res.status(422).send({errors: [{title: 'Invalid User', detail: "cannot create booking on your own rental"}]});
            }
            return res.json({booking, foundRental});
        })
}