// Import the express library.
const express = require('express');

// Import the built-in path module, which will help you create correct file paths.
const path = require('path');

// Create an instance of an Express application.
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Define a port to run the server on (e.g., 3000).
const PORT = 3000;

// Create a route handler for GET requests to the root URL (/). When this route is requested, it should send the index.html file from your public directory.
app.get('/', (req, res) => {
  console.log(req.url);
  res.send(File(path.join(__dirname, 'public/index.html')));
});

// Create another route handler for GET requests to /contact. This should send the contact.html file.

app.get('/contact', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Start the server and have it listen on your chosen port. When it starts, it should log a message to the console, like Server is running on port 3000.

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
