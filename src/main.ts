import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/main.css'
import ImageVue from '../src/components/Image.vue'

const app = createApp(App)

app.component('ImageVue', ImageVue)
app.mount('#app')
