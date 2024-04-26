<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Sidebar from './components/Sidebar.vue';
import ToDoItem from './components/ToDoItem.vue';
import { useTodosStore } from './store/useTodosStore.ts';
import { useFilters } from './store/useFilters.ts';

const store = useTodosStore();
const { allTodos, isFetchingTodos } = storeToRefs(store);

const filters = useFilters();
const { statusFilter } = storeToRefs(filters);

store.fetchTodos();

const todos = computed(() => {
  if (statusFilter.value === null) {
    return allTodos.value;
  }

  return allTodos.value.filter((item) => {
    if (item.completed === statusFilter.value) {
      return true;
    }
    return false;
  });
});
</script>

<template>
  <section class="p-4 container">
    <h1 class="mb-6 text-center">
      Todo list with all those 🔔 & 🌬️
    </h1>

    <div class="grid grid-cols-[268px_1fr] gap-4">
      <Sidebar />

      <section>
        <!-- USED FOR CREATE CARD TELEPORT -->
        <div id="create-slot" />

        <div v-if="isFetchingTodos">
          <em class="mb-3 block text-center">Loading your favourite todos, please be patient</em>
          <progress />
        </div>

        <ul v-else role="list">
          <li v-for="(item, index) in todos" :key="item.id">
            <ToDoItem v-bind="item" :index="index" />
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>

</style>./components/NewTodo.vue/index.ts
