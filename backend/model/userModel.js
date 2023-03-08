const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: {
      type: Number,
      required: [true, "Please add a text"],
    },
    name: {
      type: String,
      required: [true, "Please add a text"],
    },
    email: {
      type: String,
      required: [true, "Please add a text"],
    },
    phoneNo: {
      type: String,
      required: [true, "Please add a text"],
    },
    address: {
      type: String,
      required: [true, "Please add a text"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
