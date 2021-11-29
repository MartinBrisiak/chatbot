import express from 'express';
import { Server } from 'http';
// import { PostgreDB } from './services/postgreDB';
import { MongoDB } from './services/mongoDB';

const app = express();
const port = 3000;

app.get('/hi', (req, res) => {
  // PostgreDB.find().then((x) => res.send(x));
  MongoDB.find().then((x: any) => res.send(x));
});

// PostgreDB.initDb(() => {
MongoDB.initDb(() => {
  const server: Server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

    process.on('SIGTERM', () => { // todo - fix, not working
      server.close(() => {
        console.log('Process terminated');
      });
    });
  }).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('server startup error: address already in use');
    } else {
      console.log(err);
    }
    process.kill(process.pid, 'SIGTERM'); // todo - not working
  });
});
