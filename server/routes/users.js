const express = require('express');
const User = require('../controllers/user');
const router = express.Router();

// router.get('/:id', User.authMiddleware, User.getUser);
router.get('',(req,res)=>{
    res.json({"hello":"body"})
})
router.post('/auth', User.auth);

router.post('/register', User.register);

module.exports = router;