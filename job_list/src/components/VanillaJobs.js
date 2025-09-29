import { createApp } from 'vue'
import Jobs from './Jobs.vue'

export default (selector) => {
  createApp(Jobs).mount(selector)
}