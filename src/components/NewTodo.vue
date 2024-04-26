<script setup lang="ts">
import { useTodosStore } from '../store/useTodosStore';
import InlineBtn from './InlineBtn.vue';

const isOpen = ref(false);
const keepOpen = ref(false);
function toggle() {
  isOpen.value = !isOpen.value;
}

const store = useTodosStore();
const newTodo = ref<string | null>(null);

function onSubmit() {
  if (!newTodo.value)
    return;

  store.createNew(newTodo.value);
  newTodo.value = null;
  if (!keepOpen.value) {
    isOpen.value = false;
  }
}
</script>

<template>
  <InlineBtn class="secondary flex items-center gap-1 outline" @click="toggle">
    <span :class="{ 'block rotate-[45deg]': isOpen }">➕</span> {{ isOpen ? 'Hide' : 'Add' }} new todo
  </InlineBtn>

  <Teleport v-if="isOpen" to="#create-slot">
    <article class="!py-12">
      <form action="" class="mb-2 flex items-end gap-2" @submit.prevent="onSubmit">
        <div class="grow-1">
          <label for="todo" class="mb-3 text-xl">Create new todo item</label>
          <input
            id="todo"
            v-model.trim="newTodo"
            type="text"
            name="todo"
            class="!m-0"
          >
        </div>
        <button :disabled="!newTodo">
          Create
        </button>
      </form>

      <label for="keepOpen">
        <input
          id="keepOpen"
          v-model="keepOpen"
          type="checkbox"
          name="keepOpen"
          role="switch"
        > Keep open
      </label>
    </article>
  </Teleport>
</template>
