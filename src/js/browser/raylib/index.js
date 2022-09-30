import { setupWasmArea, loadRaylib } from './setup/setup.js';
import {
  BLUE,
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

  // setTimeout (() => {
  //   loadRaylib ();
  // }, 100);
  // setTimeout (() => {
  //   testGame ();
  // }, 1000);
}

export function testGame () {
  initWindow (640, 480, 'Test Game 1');
  beginDrawing ();
  clearBackground (BLUE);
  drawText ('Bobby...', 0, 0, 20, LIGHTGRAY);
  endDrawing ();

  // setTimeout (() => {
  //   closeWindow ();
  //   initWindow (640, 480, 'Test Game 2');
  // }, 5000);
}