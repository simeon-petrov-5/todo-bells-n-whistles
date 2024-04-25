import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import './styles/index.scss';
import 'virtual:uno.css';

const pinia = createPinia();
// eslint-disable-next-line ts/no-unsafe-argument
const app = createApp(App);

app.use(pinia);
app.mount('#app');
