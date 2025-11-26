const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./db/connection');
const morgan = require('morgan');

dotenv.config();
connectDB();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to our Tattoo Suplies Website!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
