import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/border.css'
import '@/assets/css/resets.css'

createApp(App).use(store).use(router).mount('#app')
