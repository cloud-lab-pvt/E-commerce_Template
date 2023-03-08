const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mern:areeba1234567890@mern.dnt45lz.mongodb.net/test",
      { useNewUrlParser: true }
    );
    console.log(`Mongoose Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Failed`, error);
  }
};

module.exports = connectDB;
