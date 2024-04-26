<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodosStore } from '../store/useTodosStore';
import { useFilters } from '../store/useFilters';
import InlineBtn from './InlineBtn.vue';
import NewTodo from './NewTodo.vue';

const store = useTodosStore();
const { allTodos } = storeToRefs(store);

const filters = useFilters();
const { statusFilter } = storeToRefs(filters);

const isDisabled = computed(() => allTodos.value.size === 0);
</script>

<template>
  <aside>
    <ul role="list" class="grid grid-cols-1 gap-3">
      <li>
        <!-- <InlineBtn class="secondary outline">
          ➕ Add new todo
        </InlineBtn> -->
        <NewTodo />
      </li>
      <li>
        <InlineBtn class="secondary flex items-center gap-1 outline" :disabled="isDisabled" @click="store.markAll('resolved')">
          ✅ Mark all as resolved
        </InlineBtn>
      </li>
      <li>
        <InlineBtn class="secondary flex items-center gap-1 outline" :disabled="isDisabled" @click="store.markAll('unresolved')">
          ❎ Mark all as unresolved
        </InlineBtn>
      </li>
      <li>
        <InlineBtn class="secondary flex items-center gap-1 outline" :disabled="isDisabled" @click="store.deleteAll">
          🗑️ Delete all todos
        </InlineBtn>
      </li>
    </ul>

    <p class="mb-3 mt-6">
      Filters
    </p>
    <ul role="list" class="grid grid-cols-1 gap-3">
      <li>
        <button :class="[statusFilter === true ? '' : 'outline']" :disabled="isDisabled" @click="statusFilter = true">
          Show all resolved
        </button>
      </li>
      <li>
        <button :class="[statusFilter === false ? '' : 'outline']" :disabled="isDisabled" @click="statusFilter = false">
          Show all resolved
        </button>
      </li>
      <li>
        <button
          class="secondary"
          :class="[statusFilter !== null ? '' : 'outline']"
          :disabled="isDisabled"
          @click="statusFilter = null"
        >
          Clear filters
        </button>
      </li>
    </ul>
  </aside>
</template>

<style scoped>

</style>
