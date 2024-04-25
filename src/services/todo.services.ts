import axios from 'axios';
import type { GroupedTodos, ToDoAPI } from '../types/ToDo.type';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export async function getToDos(): Promise<GroupedTodos> {
  const todos: GroupedTodos = new Map();
  try {
    const res = await axios.get<ToDoAPI[]>(`${BASE_API_URL}/todos`);
    res.data.forEach((entry) => {
      todos.set(entry.id, {
        id: entry.id,
        title: entry.title,
        completed: entry.completed,
        color: null
      });
    });
    return todos;
  }
  catch (e) {
    console.error('Ooops something went wrong', e);
    return todos;
  }
}
