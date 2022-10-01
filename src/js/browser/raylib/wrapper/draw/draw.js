import { RL } from '/~raylib/wrapper/index.js';
import { BLACK } from '/~raylib/wrapper/color/index.js';

export function beginDrawing () {
  RL.BeginDrawing ();
}

export function clearBackground (index = BLACK) {
  RL.ClearBackground (index);
}

export function endDrawing () {
  RL.EndDrawing ();
}
