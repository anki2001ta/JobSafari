const express = require("express");

const { AllJob,SingleJob } = require("../Controllers/Get");
const {PostJob}=require("../Controllers/Post");

const jobRoute=express.Router();
jobRoute.get("/",AllJob);
jobRoute.get("/singlejob/:id",SingleJob);
jobRoute.post("/postjob",PostJob);
module.exports=jobRoute;