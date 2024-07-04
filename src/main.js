import './assets/main.css'

import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'

VueElement.prototype.$frutas = []

const app = createApp(App)

app.use(router)

app.mount('#app')
