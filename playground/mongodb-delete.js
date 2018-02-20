// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Marta'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a8b30e6d3887115cc30e85b')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
