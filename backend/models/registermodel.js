const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var nameSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    address1:String,
    address2:String,
    zipCode:String,
    qualification:String,
    comments:String,
    country:String,
    state:String,
    city:String


});
module.exports=mongoose.model("Register",nameSchema);