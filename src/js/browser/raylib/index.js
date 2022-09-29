import { setupWasmArea, loadRaylib } from './setup/setup.js';
import {
  beginDrawing,
  clearBackground,
  closeWindow,
  drawText,
  endDrawing,
  initWindow,
} from './raylib.js';

export function startRaylib () {
  setupWasmArea ();
  setTimeout (() => {
    loadRaylib ();
  }, 100);

  setTimeout (() => {
    testGame ();
  }, 1000);
}

export function testGame () {
  initWindow (320, 240, 'Test Game 1');

  beginDrawing ();
  clearBackground ();
  drawText ('Bobby...', 0, 0, 20);
  endDrawing ();

  setTimeout (() => {
    closeWindow ();
    initWindow (640, 480, 'Test Game 2');
  }, 5000);
}