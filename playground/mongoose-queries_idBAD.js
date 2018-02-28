const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a96c9e24a42ff861bab6908';
var text = 'First test todo';

Todo.find({
  _id: id
  // text: text
}).then((todos) => {
  console.log('Todos', todos);
});
//
// Todo.findOne({
//   _id: id
//   // text: text
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

// console.log(_id);
