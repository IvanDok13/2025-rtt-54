const express = require('express');

const {
  searchMovies,
  getMovieDetails,
} = require('../controllers/movieController');

const movieRouter = express.Router();

// Routes
movieRouter.get('/', (req, res) => {
  res.send('Sending all movies!');
});

movieRouter.get('/search', searchMovies);

movieRouter.get('/:id', getMovieDetails);

module.exports = movieRouter;
