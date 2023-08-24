import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './css/estilos.css'

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
