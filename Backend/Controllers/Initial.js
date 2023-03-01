const mdbConnection = require("../Configs/DB");
const env = require("dotenv");
env.config();
let port = process.env.PORT || 4000;
const test = (req, res) => {
  try {
    res.status(200).send({ msg: "deployed" });
  } catch (error) {
    console.log(error);
  }
};

const listen = () => {
  try {
    mdbConnection;
    console.log(`listening to http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, listen};
