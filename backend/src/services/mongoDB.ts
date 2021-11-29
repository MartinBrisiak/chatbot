import { MongoClient } from 'mongodb';
import assert from 'assert';

const config = require('../config');

export module MongoDB {

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
        console.log(`'errrrrorrrrr ${err}'`);
        return callback(err);
      }
      console.log('"DB initialized - connected to: TODO"');
      myDb = db.db('mydb'); // todo - to variable
      return callback(null, myDb);
    };

    // MongoClient.connect(config.db.connectionString, config.db.connectionOptions, connected);
    MongoClient.connect(config.db.connectionString, connected);

    return null;
  };

  export async function find() {
    const res = await myDb.collection('sample_collection').find({ age: '1' }).toArray();
    return res;
  }
}
