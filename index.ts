import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    // logTodo(id,title,completed);
    // calling logTodo with wrong sequence of parameters
    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`s
    The Requested Todo-id is: ${id}
    The Requested Todo-title is: ${title}
    is it finished: ${completed}
    `);
};
