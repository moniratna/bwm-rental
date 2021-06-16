const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const User = require('../models/user');
const UserCtrl = require('../controllers/user');
const { normalizeErrors } = require('../helpers/mongoose');

router.get('/secret',UserCtrl.authMiddleware, (req,res)=>{
    res.json({"secret":true});
});

router.get('/:id',(req,res)=>{
    const rentalId = req.params.id;

    Rental.findById(rentalId)
          .populate('user','username -_id')
          .populate('bookings', 'startAt endAt -_id')
          .exec(function(err, foundRental){
            if(err) {
                res.status(422).send({errors: [{title: 'rental error!', detail:"Couldn't find rental!"}]});
            }
            res.json(foundRental);
    });
});

router.get('',(req,res)=>{
    const city = req.query.city;

    if(city){
        Rental.find({city: city.toLowerCase()})
              .select('-bookings')
              .exec(function(err,filteredRentals){
                  if(err) {
                      return res.status(422).send({errors:normalizeErrors(err.errors)});
                  }
                  if(filteredRentals.length === 0) {
                      return res.status(422).send({errors:[{title: 'No rental found!', detail: `There are no rentals for city ${city}`}]})
                  }
                  return res.json(filteredRentals);
              })

    } else {
        Rental.find({})
        .select('-bookings')
        .exec(function(err,foundRentals){
            res.json(foundRentals);
        });
    }
   
});
router.post('',UserCtrl.authMiddleware, function(req,res){
    const {title, city, street, category, image, shared, bedrooms, description, dailyRate} = req.body;
    const user = res.locals.user;

    const rental = new Rental({title, city, street, category, image, shared, bedrooms, description,dailyRate});

    Rental.create(rental, function(err, newRenal){
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
        User.update({_id: user.id},{$push:{rentals: newRental}});

        return res.json(newRental);
    })
})

module.exports = router;