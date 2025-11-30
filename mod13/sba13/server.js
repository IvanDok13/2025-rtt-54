const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connections');
const morgan = require('morgan');
const productRoute = require('./routes/Routes');

dotenv.config();
connectDB();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to our Tattoo Suplies Website!');
});

app.use('/products', productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
