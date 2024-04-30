<script setup lang="ts">
import { useColors } from '../store/useColors';
import { useTodosStore } from '../store/useTodosStore';
import type { ToDo } from '../types/ToDo.type';
import InlineBtn from './InlineBtn.vue';

const props = defineProps<ToDo & { index: number }>();
const { id, completed, title, index, color } = toRefs(props);

const { updateSingleStatus, deleteSingle } = useTodosStore();
const clrStore = useColors();
</script>

<template>
  <article class="relative flex items-center gap-3 border border-transparent border-solid" :style="color !== null ? `border-color: ${color};` : ''">
    <div v-if="color !== null" :style="`background: ${color};`" class="absolute inset-0 opacity-30" />

    <label :for="`item-${id}`" class="z-1 grow-1">
      <input
        :id="`item-${id}`"
        :name="`item-${id}`"
        type="checkbox"
        :checked="completed"
        @change="(e:any) => updateSingleStatus(index, e.target.checked)"
      >
      <span class="!cursor-pointer !border-none" :data-tooltip="title">{{ title }}</span>
    </label>

    <InlineBtn class="z-1" data-tooltip="Choose a color" @click="clrStore.openDialog(index)">
      🎨
    </InlineBtn>
    <InlineBtn class="z-1" data-tooltip="Delete" @click="deleteSingle(index)">
      🗑️
    </InlineBtn>
  </article>
</template>

<style scoped>

</style>
