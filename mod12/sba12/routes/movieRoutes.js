const express = require('express');

const movieRouter = express.Router();

// Routes
movieRouter.get('/', (req, res) => {
  res.send('Sending all movies...');
});

movieRouter.het('/search', (req, res) => {
  res.send('Searching for movies...');
});

movieRouter.get('/:id', (req, res) => {
  res.send(`Sending data for movie with id: ${req.params.id}`);
});

module.exports = movieRouter;
