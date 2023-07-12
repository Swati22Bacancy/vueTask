import { createApp } from 'vue'
import App from './App.vue'
import jsonToCsv from './plugins/jsonToCsv';
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App).use(router);
app.use(jsonToCsv);

app.mount('#app')
