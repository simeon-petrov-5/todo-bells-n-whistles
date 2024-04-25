import { defineStore } from 'pinia';
import type { GroupedTodos } from '../types/ToDo.type';
import { getToDos } from '../services/todo.services';

export const useTodosStore = defineStore('todos', () => {
  const allTodos = ref<GroupedTodos>(new Map());
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
    allTodos.value.clear();
  };

  const updateSingleStatus = (id: number, completed: boolean) => {
    const item = allTodos.value.get(id);
    if (item) {
      item.completed = completed;
    }
  };

  const deleteSingle = (id: number) => {
    allTodos.value.delete(id);
  };

  return { allTodos, isFetchingTodos, fetchTodos, markAll, deleteAll, updateSingleStatus, deleteSingle };
});
