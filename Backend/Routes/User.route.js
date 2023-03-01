const express = require("express");
const { getUsers, fetchUsers, delUsers } = require("../Controllers/Initial");

const userRoute=express.Router();
module.exports=userRoute;