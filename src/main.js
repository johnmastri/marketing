import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './index.css'
import { useThemeStore } from './stores/theme'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// Initialize theme on startup so variables and dark mode apply immediately
const themeStore = useThemeStore(pinia)
themeStore.init()
app.use(router)
app.mount('#app')
