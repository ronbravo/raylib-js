import { getShared } from './wrapper/wrapper.js';

const rl = getShared ().rl;

export function beginDrawing () {
  rl.BeginDrawing ();
}

export function closeWindow () {
  rl.CloseWindow ();
}

export function clearBackground () {
  rl.ClearBackground ();
}

export function drawText (text, x, y, size) {
  rl.DrawText (text, x, y, size);
}

export function endDrawing () {
  rl.EndDrawing ();
}

export function initWindow (width, height, title) {
  document.title = title;
  rl.InitWindow (width, height, title);
}
