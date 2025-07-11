import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { load } from './store'

load('todo_list')
createApp(App).mount('#app')
