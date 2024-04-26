import { defineStore } from 'pinia';

export const useFilters = defineStore('filters', () => {
  const statusFilter = ref<null | boolean>(null);

  return { statusFilter };
});
