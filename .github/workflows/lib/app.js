import express from 'express';
import cors from 'cors';

const app = express();

// This allows our app to be called from any website
app.use(cors());

// test route
app.get('/', (req, res) => {
    res.send('This is a test');
});

export default app