<script setup lang="ts">
import { storeToRefs } from 'pinia';
import InlineBtn from './components/InlineBtn.vue';
import ToDoItem from './components/ToDoItem.vue';
import { useTodosStore } from './store/useTodosStore.ts';
import type { ToDo } from './types/ToDo.type';

const store = useTodosStore();
const { allTodos, isFetchingTodos } = storeToRefs(store);

store.fetchTodos();

const statusFilter = ref<null | boolean>(null);

const todos = computed(() => {
  if (statusFilter.value === null) {
    return allTodos.value;
  }

  const filtered = new Map<number, ToDo>();
  allTodos.value.forEach((item) => {
    if (item.completed === statusFilter.value) {
      filtered.set(item.id, item);
    }
  });
  return filtered;
});
</script>

<template>
  <section class="py-4 container">
    <h1 class="mb-6 text-center">
      Todo list with all those 🔔 & 🌬️
    </h1>

    <div class="grid grid-cols-[268px_1fr] gap-4">
      <aside>
        <ul class="list-reset">
          <li class="list-reset">
            <InlineBtn class="secondary outline">
              ➕ Add new todo
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline" @click="store.markAll('resolved')">
              ✅ Mark all as resolved
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline" @click="store.markAll('unresolved')">
              ❎ Mark all as unresolved
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline" @click="store.deleteAll">
              🗑️ Delete all todos
            </InlineBtn>
          </li>
        </ul>
      </aside>

      <div>
        <div class="flex flex-wrap items-center gap-3">
          <span>Filters</span>
          <button :class="[statusFilter === true ? '' : 'outline']" @click="statusFilter = true">
            Show all resolved
          </button>
          <button :class="[statusFilter === false ? '' : 'outline']" @click="statusFilter = false">
            Show all resolved
          </button>
          <button class="secondary" :class="[statusFilter !== null ? '' : 'outline']" @click="statusFilter = null">
            Clear filters
          </button>
        </div>
        <div v-if="isFetchingTodos">
          <em class="mb-3 block text-center">Loading your favourite todos, please be patient</em>
          <progress />
        </div>

        <ul v-else class="list-reset">
          <li v-for="[id, item] in todos" :key="id" class="list-reset">
            <ToDoItem v-bind="item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
