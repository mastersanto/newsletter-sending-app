import express from 'express';
import bodyParser from 'body-parser';

import connectDB from './config/db'
// import { routes } from './routes';
import { newsletters } from './features/newsletters';

const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use('/newsletters', newsletters);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});