import { createApp } from 'vue'
import Todos from './Todos.vue'

export default (selector) => {
  createApp(Todos).mount(selector)
}