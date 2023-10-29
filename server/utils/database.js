const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to DB!");
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
