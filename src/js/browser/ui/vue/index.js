import { createApp } from 'vue'
import App from './component/app/App.vue';

export function setupVue () {
  createApp(App).mount('#app')
}
