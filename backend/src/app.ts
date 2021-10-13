import express from 'express';
import { PostgreDB } from './services/postgreDB';

const app = express();
const port = 3000;

app.get('/hi', (req, res) => {
  PostgreDB.find().then((x) => res.send(x));
});

// app.get('/hihi', dunno.find)
PostgreDB.initDb(() => {
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
