import express from 'express';
import { DB } from './services/db';

const app = express();
const port = 3000;

// const { Dunno } = require('./services/dunno');

// const dunno = new Dunno();

// initDb():

app.get('/hi', (req, res) => {
  // const db = getDb();
  DB.find().then((x) => res.send(x));
});

// app.get('/hihi', dunno.find)
DB.initDb(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  }).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('server startup error: address already in use');
    } else {
      console.log(err);
    }
  });
});
