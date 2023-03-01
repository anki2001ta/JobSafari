const env = require("dotenv");
env.config();
const UserModel = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JobModel = require("../Models/Job.model");

const Signup = async (req, res) => {
  try {
    let data = await UserModel.find({ email: req.body.email });
    if (data.length > 0) {
      res.status(200).send({ msg: "User Already Exist" });
    } else {
      bcrypt.hash(req.body.password, 4, async (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "Something went wrong !" });
        }
        req.body.password = hash;
        req.body.administration = false;
        await UserModel.create(req.body);
        res.status(200).send({ msg: "User registered Successfully" });
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).send({ msg: "Failed to create new user" });
  }
};
const Login = async (req, res) => {
  try {
    let data = await UserModel.find({ email: req.body.email });
    if (data.length <= 0) {
      res.status(200).send({ msg: "User not found" });
    } else {
      bcrypt.compare(req.body.password, data[0].password, (err, result) => {
        if (err) {
          res.status(500).send({ msg: "Something went wrong !" });
        } else if (result) {
          jwt.sign(
            { userID: data[0]._id },
            process.env.SEC_KEY,
            (err, token) => {
              let temp = data[0];
              temp.password = "***********";
              res
                .status(200)
                .send({
                  msg: "User login Successfully",
                  token: token,
                  user: temp,
                });
            }
          );
        }
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).send({ msg: "Failed to login" });
  }
};
const PostJob=async(req,res)=>{
    try {
        await JobModel.create(req.body);
    } catch (error) {
        res.status(500).send({ msg: "Failed to post the job" });
    }
}
module.exports = { Login,Signup,PostJob };
