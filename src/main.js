import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalComponents from '@/plugins/global-components';

const app = createApp(App);

//app.use(globalComponents);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

//console.log('URL : ', import.meta.env.VITE_APP_API_URL);
