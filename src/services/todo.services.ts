import axios from 'axios';
import type { ToDo, ToDoAPI } from '../types/ToDo.type';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export async function getToDos(): Promise<ToDo[]> {
  try {
    const res = await axios.get<ToDoAPI[]>(`${BASE_API_URL}/todos`);
    return res.data.map(entry => ({
      id: entry.id,
      title: entry.title,
      completed: entry.completed,
      color: null
    }));
  }
  catch (e) {
    console.error('Ooops something went wrong', e);
    return [];
  }
}
