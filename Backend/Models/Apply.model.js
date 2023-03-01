const mongoose=require("mongoose");
const jobSchema=mongoose.Schema({
    jobID:String,
    username:String,
    email:String
})
const ApplyModel=mongoose.model("reduxapplyjob",jobSchema);
module.exports=ApplyModel;