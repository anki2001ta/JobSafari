const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
env.config();
const { test, listen} = require("./Controllers/Initial");
const {Login,Signup}=require("./Controllers/Post")
const jobRoute = require("./Routes/Job.route");
const { auth } = require("./Middlewares/Auth.middleware");
let port = process.env.PORT || 4000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.post("/signup", Signup);
app.post("/login",Login );
app.get("/", test);
app.use(auth)
app.use("/jobs",jobRoute);


app.listen(port, listen);

module.expots=app;