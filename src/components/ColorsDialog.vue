<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useColors } from '../store/useColors';
import { useTodosStore } from '../store/useTodosStore';

const clrStore = useColors();
const todosStore = useTodosStore();
const { colorOpts, selectedTodoIdx } = storeToRefs(clrStore);

const selected = ref<string | null>(null);

watch(selectedTodoIdx, () => {
  if (selectedTodoIdx.value === null)
    return;
  const todo = todosStore.allTodos[selectedTodoIdx.value];
  if (!todo)
    return;

  selected.value = todo.color;
});

function onSelect(clr: string) {
  selected.value = clr === selected.value ? null : clr;
}

function onSave() {
  if (selectedTodoIdx.value === null)
    return;
  todosStore.updateSingleColor(selectedTodoIdx.value, selected.value);
  clrStore.closeDialog();
}
</script>

<template>
  <dialog :open="clrStore.isDialogOpen">
    <article>
      <header>
        <button aria-label="Close" rel="prev" @click="clrStore.closeDialog" />
        <p>
          <strong>Choose your color</strong>
        </p>
      </header>
      <ul role="list" class="grid grid-cols-6">
        <li v-for="clr in colorOpts" :key="clr">
          <button class="secondary w-full" :class="{ outline: selected !== clr }" @click="onSelect(clr)">
            <div
              :style="`background: ${clr};`"
              class="h-2 w-full border border-black rounded border-solid"
            />
          </button>
        </li>
      </ul>

      <footer>
        <button className="secondary" @click="clrStore.closeDialog">
          Cancel
        </button>
        <button @click="onSave">
          Save
        </button>
      </footer>
    </article>
  </dialog>
</template>
