var express = require('express');
var router = express.Router();

var Message=require('../models/message');

//backend function to fetch message from database
router.get('/',function(req,res, next){
   Message.find()
       .exec(function (err,messages) {
           if (err) {
               return res.status(500).json({
                   title: "An erroe occured",
                   error: err
               });
           }
           res.status(200).json({
               message:"Success",
               obj:messages
           });
       });
});

router.post('/', function (req, res, next) {
    var message=new Message({
        //access the body attached to a request
       content:req.body.content
    });
    message.save(function (err,result) {
        // not only send respnose but also return to function
        if(err){
            return res.status(500).json({
                title:"An erroe occured",
                error:err
            });
        }
        //if the error is null
       res.status(201).json({
           message:"Saved message",
           obj:result
       });
    });
});


module.exports = router;
