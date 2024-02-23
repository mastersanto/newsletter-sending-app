import express from 'express';
import bodyParser from 'body-parser';
import sitemap  from 'express-sitemap-html'

import connectDB from './config/db'
import { newsletters } from './features/newsletters';
import { recipients } from './features/recipients';

const PORT = 3001;
const app = express();

// TODO: just for for local dev
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use('/newsletters', newsletters);
app.use('/recipients', recipients);

sitemap.swagger('Stori Newsletter App - API DOCS', app)

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});