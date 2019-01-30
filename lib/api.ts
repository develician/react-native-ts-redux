import axios from 'axios';

export const getTodos = () =>
  axios.get('https://jsonplaceholder.typicode.com/todos');
export const getTodoById = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
