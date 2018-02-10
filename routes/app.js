var express = require('express');
var router = express.Router();
var User=require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({},function(err,doc){
        if(err){
            return res.send("error!");
        }
        res.render('node',{email:doc.email});
    });

});

router.post('/',function(req,res,next){
    var email=req.body.email;
    var user=new User({
        firstName: 'carolyn',
        lastName: 'wu',
        password: 'aa',
        email: email
    });
    user.save();
    res.redirect('/');

});
module.exports = router;
