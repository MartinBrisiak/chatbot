db.createCollection('sample_collection');

db.sample_collection.insertMany([
 {
   _id: 1,
    name: 'a',
    age: '1',
  },
  {
    _id: 2,
    name: 'b',
    age: '2',
  },
  {
    _id: 3,
    name: 'c',
    age: '3',
  }
]);