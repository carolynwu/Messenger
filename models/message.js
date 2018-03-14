var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var User=require("./user");

var schema=new Schema({
    content:{type: String, required:true},
    //the internal type to store the ids of the different object
    user:{type:Schema.Types.ObjectId,ref:'User'}
});

schema.post("remove", function(message){
    User.findById(message.user, function(err,user){
        user.messages.pull(message);
        user.save();
    });
});
module.exports=mongoose.model('Message',schema);
