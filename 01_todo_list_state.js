let todoList = [];
const addTodo = (e) => todoList.push(e);
addTodo("First Todo");
console.log(todoList);
addTodo("Visit the doctor");
addTodo("Go the market");
addTodo("Drink enough water");
addTodo("Get foodstuffs");
addTodo("Get foodstuffs");
console.log(todoList);

const renameTodo = (todo, renamed) => {
  todoList = todoList.map(
    (value) => (todo == value ? renamed : value)
    //      {
    //     if (todo == value) {
    //         return renamed;
    //     }else {
    //         return value;
    //     

    // }
  );
};
renameTodo("Drink enough water", "Take fruits");
console.log(todoList);


const removetodo = (todo) => {
  const todoIndex = todoList.indexOf(todo);
  todoList.splice(todoIndex, 1);
};

removetodo("Get foodstuffs");
console.log(todoList);
