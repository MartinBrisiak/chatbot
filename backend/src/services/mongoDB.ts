import { MongoClient } from 'mongodb';
import assert from 'assert';
const config = require('../config.js');

export module PostgreDB {

  let myDb: any;

  export const getDb = () => {
    assert.ok(myDb, 'Db has not been initialized. Please called init first.');
    return myDb;
  };

  export const initDb = (callback: any) => {
    if (myDb) {
      console.warn('Trying to init DB again!');
      return callback(null, myDb);
    }

    const connected = (err: any, db: any) => {
      // console.log(`'connected ${err} ${db}'`)
      if (err) {
        console.log(`'errrrrorrrrr ${err} ${db}'`);
        return callback(err);
      }
      console.log('"DB initialized - connected to: TODO"');
      myDb = db;
      return callback(null, myDb);
    };

    // MongoClient.connect(config.db.connectionString, config.db.connectionOptions, connected);
    MongoClient.connect(config.db.connectionString, connected);
    
    return null;
  };

  export async function find() {
    const res = await myDb.query('SELECT info FROM orders');
    console.log(res);
    return res;
  }
}
