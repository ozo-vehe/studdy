import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import { firebase_app } from './firebase';
import { getAnalytics } from "firebase/analytics";

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');
getAnalytics(firebase_app);