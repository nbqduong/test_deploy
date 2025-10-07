const express = require('express');
const app = express();

// DigitalOcean's App Platform injects a PORT environment variable.
// We use `process.env.PORT` to listen on the correct port.
// For local testing, it will fall back to port 3000.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! My simple app is now live on DigitalOcean.');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
