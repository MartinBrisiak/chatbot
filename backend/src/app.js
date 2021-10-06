const express = require('express')
const app = express()
const port = 3000

// const { Dunno } = require('./services/dunno');
const { getDb, initDb, find } = require('./services/db');

// const dunno = new Dunno();

// initDb():

app.get('/hi', (req, res) => {
  const db = getDb();
  find().then(x => res.send(x))
})

// app.get('/hihi', dunno.find)
initDb(() => {
  app.listen(port, (err) => {
    if (err) {
      throw err; //
    }
    console.log(`Example app listening at http://localhost:${port}`)
  })
})


