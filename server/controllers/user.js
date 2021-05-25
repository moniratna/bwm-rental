const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');
exports.auth = function(req,res){
    const {email, password } = req.body;
    if (!password || !email){
        return res.status(422).send({errors: [{title:"Data missing", detail:"Provide email and password"}]});
    }
    User.findOne({email},function(err, user){
        if (err) {
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
        if(!user) {
            return res.status(422).send({errors: [{title: 'Invalid User', detail:"user does not exist"}]});
        }
        if(user.samePassword(password)){

        }else{
            return res.status(422).send({errors:[{title: "wrong Data", detail: "wrong email or pass"}]})
        }
    })
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
            return res.status(422).send({errors: normalizeErrors(err.errors)});
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
                return res.status(422).send({errors: normalizeErrors(err.errors)})
            }
            return res.json({'registered':true});
        });
    });
}