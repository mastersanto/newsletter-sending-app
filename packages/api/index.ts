import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Received request for URL:', req.url);
  res.end('Hello World!');
});

app.listen(3000, () => {
  console.log("The server is running on port 3000!");
});