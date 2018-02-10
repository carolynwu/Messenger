var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    content:{type: String, required:true},
    //the internal type to store the ids of the different object
    user:{type:Schema.Types.ObjectId,ref:'User'}
});

module.exports=mongoose.model('Message',schema);
