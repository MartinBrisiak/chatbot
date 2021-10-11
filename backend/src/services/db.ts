const { Client } = require('pg');
const assert = require('assert');

export module DB {

  let _db: any;

  export const getDb = () => {
    assert.ok(_db, 'Db has not been initialized. Please called init first.');
    return _db;
  };

  export const initDb = (callback: any) => {
    if (_db) {
      console.warn('Trying to init DB again!');
      return callback(null, _db);
    }

    const client = new Client({
      user: 'postgres',
      host: '172.17.0.1',
      database: 'postgres',
      password: 'mysecretpassword',
      port: 5432,
    });

    const connected = (err: any, db: any) => {
      // console.log(`'connected ${err} ${db}'`)
      if (err) {
        console.log(`'errrrrorrrrr ${err} ${db}'`);
        return callback(err);
      }
      console.log('"DB initialized - connected to: TODO"');
      _db = db;
      return callback(null, _db);
    };

    client.connect(connected);
  };

  export async function find() {
    const res = await _db.query('SELECT info FROM orders');
    console.log(res);
    return res;
  }
}
