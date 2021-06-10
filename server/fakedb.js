const Rental = require('./models/rental');
const User = require('./models/user');

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
    }];
        this.users = [{
            username: "Test User0",
            email:"testou@gmail.com",
            password: "moni98"
        },
        {
            username: "test user1",
            email: "testo1@gmail.com",
            password: "moni98"
        }
    ]
    }
    // async cleanDb(){
    //     await user.remove({});
    //     await Rental.remove({});
    // }
    pushRentalsToDb() {
        const user = new User(this.users[0]);
        const user2 = new User(this.users[1]);
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);
            newRental.user = user;
            user.rentals.push(newRental);
            newRental.save()
            // newRental.save();
        });
        user.save();
        user2.save();
    }
    seedDb(){
        // await this.cleanDb()
        this.pushRentalsToDb()
    }
}

module.exports = FakeDb;