const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:password12345@cluster0.yu0nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;