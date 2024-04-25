import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  shortcuts:{
    'list-reset':'m-0 list-none p-0',
  }
});
