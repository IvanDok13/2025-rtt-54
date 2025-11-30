const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(' We are connected to our DB!');
  } catch (error) {
    console.log('Connection to DB failed');
  }
};

module.exports = connectDB;
