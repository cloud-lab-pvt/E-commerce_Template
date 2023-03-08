const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: [true, "Please add a text"],
    },
    name: {
      type: String,
      required: [true, "Please add a text"],
    },
    category: {
      type: String,
      required: [true, "Please add a text"],
    },
    description: {
      type: String,
      required: [true, "Please add a text"],
    },
    price: {
      type: Number,
      required: [true, "Please add a text"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
