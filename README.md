# Todo list with all those 🔔 & 🌬️
This is a small interview task, where we need to create a to-do list app with a couple more functionalities.

### Current functionalities
- [X] Create/Delete/Close items
- [X] Filter by status
- [X] Multiple items actions - delete or change status
- [X] Add a color to a specific item

### What we can/need to add further:
- [ ] We can add the option to save your custom colors to the default palette
- [ ] Filter results by color

## Some insights
- Created with Vue/Vite/TS and using a couple of enhancements like EsLint auto-formatting and AutoImport plugin of everything vue-related
- Styling - I went with using PicoCSS for its base styles and UnoCSS, as you can't beat how fast it is to work and prototype projects with these two. Using SASS and a utility-first lib p the best for production, but whatever.
- We have a fancy `Teleport` to help us with "Locality of Behaviour" and to show that you don't always need a store for that

## Created with Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
