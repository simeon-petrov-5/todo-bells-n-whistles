<script setup lang="ts">
const props = defineProps<{
  dataTooltip?: string
}>();
const emit = defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <button class="outline !border-none !p-0" :data-tooltip="props.dataTooltip" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped>

</style>
