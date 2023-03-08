const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
      required: [true, "Please add a text"],
    },
    userId: {
      type: Number,
      required: [true, "Please add a text"],
    },
    totalPrice: {
      type: String,
      required: [true, "Please add a text"],
    },
    productId: {
      type: Array,
      required: [true, "Please add a text"],
    },
    status: {
      type: Array,
      required: [true, "Please add a text"],
    },
    lotteryCode: {
      type: String,
      required: [true, "Please add a text"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
