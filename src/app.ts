import * as dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();
app.set('port', process.env.SERVER_PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

export default app;
