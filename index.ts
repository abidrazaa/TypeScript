import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todos = response.data as Todos;
  const id = todos.id;
  const title = todos.title;
  const completed = todos.completed;
  console.log(`
        Todo is of id : ${id}
        The title of the todo is: ${title}
        Is it finished? ${completed}
    `);
});

console.log('This is a typescript project');
