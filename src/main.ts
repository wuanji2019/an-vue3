import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { setupAntd } from './plugins'
import '@/styles/_global.scss'

const app = createApp(App)

setupAntd(app)
app.use(store)
app.use(router)
app.mount('#app')
