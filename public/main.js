import { start } from '../src/js/browser/index.js';
if (import.meta.env.MODE === 'raylib-js-dev') {
  console.log ('- raylib-js dev mode');
  start ();
}
