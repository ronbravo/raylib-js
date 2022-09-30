import { getShared } from './wrapper/wrapper.js';

const rl = getShared ().rl;

export const LIGHTGRAY  = 0;
export const GRAY       = 1;
export const DARKGRAY   = 2;
export const YELLOW     = 3;
export const GOLD       = 4;
export const ORANGE     = 5;
export const PINK       = 6;
export const RED        = 7;
export const MAROON     = 8;
export const GREEN      = 9;
export const LIME       = 10;
export const DARKGREEN  = 11;
export const SKYBLUE    = 12;
export const BLUE       = 13;
export const DARKBLUE   = 14;
export const PURPLE     = 15;
export const VIOLET     = 16;
export const DARKPURPLE = 17;
export const BEIGE      = 18;
export const BROWN      = 19;
export const DARKBROWN  = 20;
export const WHITE      = 21;
export const BLACK      = 22;
export const BLANK      = 23;
export const MAGENTA    = 24
export const RAYWHITE   = 25;

export function beginDrawing () {
  rl.BeginDrawing ();
}

export function closeWindow () {
  rl.CloseWindow ();
}

export function clearBackground (index = BLACK) {
  rl.ClearBackground (index);
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
