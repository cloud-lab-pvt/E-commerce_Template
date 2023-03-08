const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a text"],
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", categorySchema);
