import { createApp } from 'vue'
import router from '@/router'
import App from './app.vue'
import '@/style/index.scss'
createApp(App).use(router).mount('#app')
