import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";

axios.defaults.baseURL = 'http://localhost:25565/api';

createApp(App).use(store).use(router).mount('#app')
