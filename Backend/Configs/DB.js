const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
const url=process.env.MONGO_URL;
mongoose.set('strictQuery', false);
const mdbConnection=mongoose.connect(url);
module.exports=mdbConnection