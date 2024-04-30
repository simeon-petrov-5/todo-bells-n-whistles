import { defineStore } from 'pinia';

const DEF_PALETTE = [
  '#c52f21',
  '#d92662',
  '#c1208b',
  '#9236a4',
  '#7540bf',
  '#524ed2',
  '#2060df',
  '#0172ad',
  '#047878',
  '#007a50',
  '#398712',
  '#a5d601',
  '#f2df0d',
  '#ffbf00',
  '#ff9500',
  '#d24317',
  '#ccc6b4',
  '#ababab',
  '#646b79',
  '#525f7a',
  '#fff',
  '#000'
];

export const useColors = defineStore('colors', () => {
  const colorOpts = ref<string[]>(DEF_PALETTE);
  const selectedTodoIdx = ref<number | null>(null);

  const isDialogOpen = ref(false);
  const openDialog = (idx: number) => {
    selectedTodoIdx.value = idx;
    isDialogOpen.value = true;
  };

  const closeDialog = () => {
    isDialogOpen.value = false;
    selectedTodoIdx.value = null;
  };

  return { colorOpts, selectedTodoIdx, isDialogOpen, openDialog, closeDialog };
});
