import vue from '@vitejs/plugin-vue'
import FullReload from 'vite-plugin-full-reload'
import { defineConfig } from 'vite'
import { resolve } from 'path';


// NOTE: Using a pluging to fully reload the page instead of HMR.
// This is because of issues with dynamically loading the wasm. This
// will need to be researched more later to see if a compatible way
// exists to work with wasm.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    FullReload([
      'src/js/browser/**/*',
      'public/lib/raylib/**/*',
    ]),
  ],
  resolve: {
    alias: {
      '/~raylib': resolve (__dirname, 'src', 'js', 'browser', 'raylib'),
      '/~ui/common': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'common'),
      '/~ui/vue/basic': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue', 'component', 'basic'),
      '/~ui/vue': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue'),
    },
  },
  server: {
    port: 3000,
    hmr: false,
  },
});


/*
// '@tamedjs/core': resolve (__dirname, 'src', 'js', 'common'),

'/~browser': resolve (__dirname, 'src', 'js', 'browser'),
'/~common': resolve (__dirname, 'src', 'js', 'common'),

// Mithril
'/~mithril/basic': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'mithril', 'component', 'basic'),
'/~mithril': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'mithril'),

// Vue
'/~vue/basic': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue', 'component', 'basic'),
'/~vue/composite': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue', 'component', 'composite'),
'/~vue/layout': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue', 'component', 'layout'),
'/~vue/page': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue', 'component', 'page'),
'/~vue': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue'),

// '~browser': resolve (__dirname, 'src', 'js', 'browser'),
// '~common': resolve (__dirname, 'src', 'js', 'common'),
// '/~browser': resolve (__dirname, 'src', 'js', 'browser'),
// '/~common': resolve (__dirname, 'src', 'js', 'common'),
// '/~vue': resolve (__dirname, 'src', 'js', 'browser', 'ui', 'vue'),
// '/~ui': resolve (__dirname, 'src', 'js', 'browser', 'ui'),
*/