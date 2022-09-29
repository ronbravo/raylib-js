import { createApp } from 'vue/dist/vue.esm-bundler';
import App from '/~ui/vue/basic/app/App.vue';

export function setupVue () {
  app = createApp (App).mount ('#app');
}
