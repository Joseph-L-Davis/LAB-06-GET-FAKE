import app from './lib/app.js';

const port = process.env.PORT || 8001;

// Start the server
app.listen(port, () => {
  // Log a message when server is running
  console.log(`App listening at http://localhost:${port}`);
});