import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import axios from 'axios';
import "@/styles/main.css";

const pinia = createPinia();
createApp(App).use(pinia).mount('#app');


