import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import "../node_modules/@fontawesome/fontawesome-free/css/all.css";

createApp(App).use(store).use(router).mount('#app')
