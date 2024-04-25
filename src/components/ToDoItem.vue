<script setup lang="ts">
import { useTodosStore } from '../store/useTodosStore';
import type { ToDo } from '../types/ToDo.type';
import InlineBtn from './InlineBtn.vue';

const props = defineProps<ToDo>();
const { id, completed, title } = toRefs(props);

const { updateSingleStatus, deleteSingle } = useTodosStore();
</script>

<template>
  <article class="flex items-center gap-3">
    <label :for="`item-${id}`" class="grow-1">
      <input
        :id="`item-${id}`"
        :name="`item-${id}`"
        type="checkbox"
        :checked="completed"
        @change="(e:any) => updateSingleStatus(id, e.target.checked)"
      >
      <span class="!cursor-pointer !border-none" :data-tooltip="title">{{ title }}</span>
    </label>

    <InlineBtn data-tooltip="Delete" @click="deleteSingle(id)">
      🗑️
    </InlineBtn>
  </article>
</template>

<style scoped>

</style>
