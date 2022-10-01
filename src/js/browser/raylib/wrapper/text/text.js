import { RL } from '/~raylib/wrapper/index.js';

export function drawText (text, x, y, size) {
  RL.DrawText (text, x, y, size);
}
