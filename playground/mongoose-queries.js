const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a96cdf44a42ff861bab6ce3';
var text = 'First test todo';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid');
}

User.find({
  _id: id
  // text: text
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: id
  // text: text
}).then((user) => {
  console.log('User by find one', user);
});

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// console.log(id);
