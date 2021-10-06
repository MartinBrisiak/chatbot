const { Pool, Client } = require('pg')
const assert = require("assert");

// class Dunno {
//   constructor() {
//     this.client = new Client({
//       user: 'postgres',
//       host: '172.17.0.1',
//       database: 'postgres',
//       password: 'mysecretpassword',
//       port: 5432,
//     })
//     this.client.connect()
//   }

//   async find () {
//     const res = await this.client.query('SELECT info FROM orders')
//     console.log(res)
//     return res;
//   }
// }

// module.exports = { Dunno }

let _db;

const getDb = () => {
  assert.ok(_db, "Db has not been initialized. Please called init first.");
  return _db;
}

const initDb = (callback) => {
  if (_db) {
    console.warn("Trying to init DB again!");
    return callback(null, _db);
  };

  const client = new Client({
    user: 'postgres',
    host: '172.17.0.1',
    database: 'postgres',
    password: 'mysecretpassword',
    port: 5432,
  });

  const connected = (err, db) => {
    // console.log(`'connected ${err} ${db}'`)
    if (err) {
      console.log(`'errrrrorrrrr ${err} ${db}'`)
      return callback(err);
    }
    console.log(`"DB initialized - connected to: TODO"`);
    _db = db;
    return callback(null, _db);
  }

  client.connect(connected);
}

async function find(){
  const res = await _db.query('SELECT info FROM orders')
  console.log(res)
  return res;
}

module.exports = { initDb, getDb, find }
