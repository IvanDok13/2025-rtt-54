const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');
const { connectDB } = require('./db/connection');
const morgan = require('morgan');

dotenv.config();
connectDB();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to our Book App! Digital Bookshelf');
});
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
