const User = require('../models/user');

exports.auth = function(req,res){

}

exports.register = function(req,res){
    const {username, email, password, passwordConfirmation} = req.body;
    
    if (!password || !email){
        return res.status(422).send({errors: [{title:"Data missing", detail:"Provide email and password"}]});
    }
    if (password !== passwordConfirmation) {
        return res.status(422).send({errors: [{title: 'invalid password', detail:"password not matched "}]});
    }
    User.findOne({email}, (err,existingUser)=>{
        if (err){
            return res.status(422).send({"mongoose":"will later"});
        }
        if(existingUser) {
            return res.status(422).send({errors:[{title: 'invalid email', detail: "User with this email already exist!"}]});
        }
        const user = new User({
            username,
            email,
            password
        });
        user.save((err)=>{
            if(err) {
                return res.status(422).send({"mongoose":"handle mongoose error in next"})
            }
            return res.json({'registered':true});
        });
    });
}