const mongoose=require('mongoose');

var Employee=mongoose.model('Employee',{

    name:{type:String},
    email:{type:String},
    salary:{type:Number},
    town:{type:String}

});
module.exports={Employee};