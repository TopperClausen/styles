import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.emitter = mitt()

app.use(createPinia())
app.use(router)

import './index.css'

app.mount('#app')
