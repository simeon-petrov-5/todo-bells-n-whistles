import { defineStore } from 'pinia';
import type { ToDo } from '../types/ToDo.type';
import { getToDos } from '../services/todo.services';

export const useTodosStore = defineStore('todos', () => {
  const allTodos = ref<ToDo[]>([]);
  const isFetchingTodos = ref(true);

  const fetchTodos = async () => {
    isFetchingTodos.value = true;
    const res = await getToDos();
    allTodos.value = res;
    isFetchingTodos.value = false;
  };

  const markAll = (mode: 'resolved' | 'unresolved') => {
    allTodos.value.forEach(item => item.completed = mode === 'resolved');
  };
  const deleteAll = () => {
    allTodos.value = [];
  };

  const updateSingleStatus = (idx: number, completed: boolean) => {
    const item = allTodos.value[idx];
    if (item) {
      item.completed = completed;
    }
  };

  const updateSingleColor = (idx: number, color: string | null) => {
    const item = allTodos.value[idx];
    if (item) {
      item.color = color;
    }
  };

  const deleteSingle = (idx: number) => {
    allTodos.value.splice(idx, 1);
  };

  const createNew = (title: string) => {
    // This is not optimal for performance, but either way id generation should be handled by the BE & DB and not in FE
    let lastId = 0;
    allTodos.value.forEach((todo) => {
      if (todo.id > lastId) {
        lastId = todo.id;
      }
    });
    const id = lastId + 1;
    const newItem: ToDo = {
      id,
      title,
      completed: false,
      color: null
    };
    allTodos.value.unshift(newItem);
  };

  return { allTodos, isFetchingTodos, fetchTodos, markAll, deleteAll, updateSingleStatus, updateSingleColor, deleteSingle, createNew };
});
