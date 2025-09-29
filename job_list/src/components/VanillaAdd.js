import { createApp } from 'vue'
import Add from './Add.vue'

export default (selector) => {
  createApp(Add).mount(selector)
}