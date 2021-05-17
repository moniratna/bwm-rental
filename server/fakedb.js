const Rental = require('./models/rental');

class FakeDb {
    constructor(){
        this.rentals = [{
            title: "nice view on ocean",
            city: "Goa",
            street: "Main street",
            category:"condo",
            image:'https://i1.wp.com/limestays.com/wp-content/uploads/2019/06/feature.jpg?fit=960%2C618&ssl=1',
            bedrooms: 4,
            description: "very nice apartment in center of city.",
            dailyRate: 43
        },
    {
            title: "nice view of Mountains",
            city: "North Sikkim",
            street: "Main street",
            category:"apartment",
            image:'https://i1.wp.com/limestays.com/wp-content/uploads/2019/06/feature.jpg?fit=960%2C618&ssl=1',
            bedrooms: 4,
            description: "very nice apartment in center of city.",
            dailyRate: 43
    },
    {
            title: "nice view Of Forests",
            city: "Gorumara",
            street: "Main stree",
            category:"house",
            image:'https://i1.wp.com/limestays.com/wp-content/uploads/2019/06/feature.jpg?fit=960%2C618&ssl=1',
            bedrooms: 4,
            description: "very nice apartment in center of city.",
            dailyRate: 43
    }]
    }
    pushRentalsToDb() {
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);

            newRental.save();
        })
    }
    seedDb(){
        this.pushRentalsToDb()
    }
}

module.exports = FakeDb;