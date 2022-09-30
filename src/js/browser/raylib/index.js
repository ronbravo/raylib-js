import { setupWasmArea, loadRaylib } from './setup/setup.js';
import {
  BLACK,
  LIGHTGRAY,
  beginDrawing,
  clearBackground,
  closeWindow,
  drawText,
  endDrawing,
  initWindow,
} from './raylib.js';

export function startRaylib () {
  setupWasmArea (function () {
    testGame ();
  });
  loadRaylib ();
}

export function testGame () {
  initWindow (640, 480, 'Test Game 1');
  beginDrawing ();
  clearBackground (BLACK);
  drawText ('Bobby...', 0, 0, 20, LIGHTGRAY);
  endDrawing ();

  // setTimeout (() => {
  //   closeWindow ();
  //   initWindow (640, 480, 'Test Game 2');
  // }, 5000);
}


// setTimeout (() => {
//   loadRaylib ();
// }, 100);
// setTimeout (() => {
//   testGame ();
// }, 1000);