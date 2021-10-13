import { Client } from 'pg';
import assert from 'assert';
// import config from '../config';

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
      myDb = db;
      return callback(null, myDb);
    };

    client.connect(connected);

    return null;
  };

  export async function find() {
    const res = await myDb.query('SELECT info FROM orders');
    console.log(res);
    return res;
  }
}
