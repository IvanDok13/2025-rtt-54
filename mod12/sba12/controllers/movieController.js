const axios = require('axios');

apiKey = process.env.OMDB_API_KEY;

async function searchMovies(req, res) {
  if (!req.query.title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  const title = req.query.title;

  try {
    const responce = await axios.get(
      `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
    );
    res.json(responce.data);
  } catch (error) {
    if (error.response) {
      console.log(
        'API Error:',
        error.response.status,
        error.response.data,
        error.message
      );
      res
        .status(error.response.status)
        .json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
  }
}

async function getMovieDetails(req, res) {
  if (!req.params.id) {
    return res
      .status(400)
      .json({ error: 'IMDB id query parameter is required' });
  }

  const movieID = req.params.id;

  try {
    const responce = await axios.get(
      `http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`
    );
    res.json(responce.data);
  } catch (error) {
    if (error.response) {
      console.log(
        'API Error:',
        error.response.status,
        error.response.data,
        error.message
      );
      res
        .status(error.response.status)
        .json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
  }
}

module.exports = { searchMovies, getMovieDetails };
