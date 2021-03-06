var express = require('express');
var router = express.Router();
var jwt=require("jsonwebtoken");

var User=require("../models/user");

var Message=require('../models/message');

//backend function to fetch message from database
router.get('/',function(req,res, next){
   Message.find()
       // expand the data which is retrieving
       .populate("user","firstName")
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

//if the user  sends a valid token
router.use("/",function(req,res,next){
    jwt.verify(req.query.token,"secret", function (err,decoded) {
        if(err){
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded=jwt.decode(req.query.token);
    User.findById(decoded.user._id,function(err,user){
        if(err){
            return res.status(500).json({
                title:"An erroe occured",
                error:err
            });
        }
        var message=new Message({
            //access the body attached to a request
            content:req.body.content,
            user:user._id
        });
        message.save(function (err,result) {
            // not only send respnose but also return to function
            if(err){
                return res.status(500).json({
                    title:"An erroe occured",
                    error:err
                });
            }
            user.messages.push(result);
            user.save();
            //if the error is null
            res.status(201).json({
                message:"Saved message",
                obj:result
            });
        });
    });
});

//patch change existing data
router.patch('/:id',function (req,res,next) {
    var decoded=jwt.decode(req.query.token);
    Message.findById(req.params.id,function(err,message){
        if(err){
            return res.status(500).json({
                title:"An error occured",
                error:err
            });
        }
        if(!message){
            return res.status(500).json({
                title:"No Message Found!",
                error:{message:"Message not found"}
            });
    }
    if(message.user!=decoded.user._id){
            return res.status(401).json({
                title:"Not Authenticated",
                error:{message:"Users do not match"}
            });
        }

    //save or update message
        message.content=req.body.content;
        message.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title:"An erroe occured",
                    error:err
                });
            }
            //if the error is null
            res.status(200).json({
                message:"updated message",
                obj:result
            });
        });
    });
});
router.delete('/:id',function(req,res,next){
    var decoded=jwt.decode(req.query.token);
    Message.findById(req.params.id,function(err,message){
        if(err){
            return res.status(500).json({
                title:"An error occured",
                error:err
            });
        }
        if(!message){
            return res.status(500).json({
                title:"No Message Found!",
                error:{message:"Message not found"}
            });
        }
        if(message.user!=decoded.user._id){
            return res.status(401).json({
                title:"Not Authenticated",
                error:{message:"Users do not match"}
            });
        }
        message.remove(function(err, result){
            if(err){
                return res.status(500).json({
                    title:"An erroe occured",
                    error:err
                });
            }
            //if the error is null
            res.status(200).json({
                message:"Deleted message",
                obj:result
            });
        });
    });
});
module.exports = router;

