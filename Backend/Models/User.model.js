const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    gender:String,
    name:String,
    location:String,
    email:String,
    phone:Number,
    password:String,
    role:String
})
const UserModel=mongoose.model("reduxuser",userSchema);
module.exports=UserModel;