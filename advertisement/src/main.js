import './assets/main.css'

import { selectType, load } from 'joblist/store'
selectType('engineer')
load()

import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
