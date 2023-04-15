const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Toy = mongoose.model("Toy", toySchema);

module.exports = Toy;