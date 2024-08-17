import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'animate.css';


const app = createApp(App)

app.use(vuetify)

app.mount('#app')

