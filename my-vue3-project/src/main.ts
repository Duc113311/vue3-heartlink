import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './stores/baseModule'

import axiosInstance from './configs/axios-instance'


const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;

app.use(store)
app.use(router);
app.use(ElementPlus);
app.mount("#app");
 
