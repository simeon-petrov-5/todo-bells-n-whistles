import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', {
        '@tanstack/vue-query': ['useQueryClient', 'useQuery', 'useMutation'],
      }],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: 'src/auto-imports-eslintrc.json',
      },
      vueTemplate: true,
    }),
    UnoCSS()
  ],
})
