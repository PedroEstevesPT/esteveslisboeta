import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './assets/global.css' // ✅ HERE

import 'animate.css';


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')

