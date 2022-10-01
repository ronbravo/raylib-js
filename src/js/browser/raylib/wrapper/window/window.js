import { RL } from '/~raylib/wrapper/index.js';

export function closeWindow () {
  RL.CloseWindow ();
}

export function initWindow (width, height, title) {
  document.title = title;
  RL.InitWindow (width, height, title);
}
