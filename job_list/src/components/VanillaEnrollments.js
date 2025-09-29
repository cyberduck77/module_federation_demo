import { createApp } from 'vue'
import Enrollments from './Enrollments.vue'

export default (selector) => {
  createApp(Enrollments).mount(selector)
}