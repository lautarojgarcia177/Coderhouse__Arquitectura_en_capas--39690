const Toy = require("./Toy.model");
const User = require("./User.model");
const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/Coderhouse_Backend_39690";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => console.log("Error connecting with mongodb", error));

module.exports = {
  Toy,
  User,
};
