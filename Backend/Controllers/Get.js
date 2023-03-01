// const UserModel = require("../Models/User.model");
const JobModel = require("../Models/Job.model");

const AllJob=async(req,res)=>{
    try {
        let alljob=await JobModel.find();
        res.status(200).send({data:alljob})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get jobs" })
    }
}

const SingleJob=async(req,res)=>{
    try {
        let jobID=req.param.id;
        let singleJob=await JobModel.findById(jobID);
        res.status(200).send({data:singleJob})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get job" })
    }
}
module.exports={AllJob,SingleJob}