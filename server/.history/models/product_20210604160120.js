const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 2000,
  },
  price{
    type: Number,
    trim: true,
    required: true,
    maxlength: 32,
  }
});



module.exports = mongoose.model("Product", productSchema);
