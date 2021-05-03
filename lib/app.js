import express from 'express';
import cors from 'cors';
import sauces from '../data/sauces.js';

const app = express();

// This allows our app to be called from any website
app.use(cors());

// test route
app.get('/', (req, res) => {
  res.send('Eatery');
});

app.get('/api/sauces', (req, res) => {
  res.json([sauces[0]]);
});

export default app;