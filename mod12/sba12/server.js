const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

// ========= Middlewares ============
app.use(morgan('dev'));
app.use(express.json());

// ============= Routes ===========

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
