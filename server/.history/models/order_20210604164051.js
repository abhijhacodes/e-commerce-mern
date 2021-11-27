const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const OrderSchema = new mongoose.Schema({
  products: [ProductCartSchema],
  transaction_id = {},
  amount: {type: Number}
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
