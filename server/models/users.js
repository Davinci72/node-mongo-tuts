var mongoose = require('mongoose');
var Users = mongoose.model('Users',{
    username:{
        type:String,
        required:true,
        trim:true
    } ,
    email:{
        type:String,
        required:true,
        minlen:1
    }
 });

 module.exports = {Users}