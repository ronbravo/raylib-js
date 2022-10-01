import {
  BLACK,
  LIGHTGRAY,
} from '/~raylib/wrapper/color/index.js';
import {
  RL,
  beginDrawing,
  clearBackground,
  drawText,
  endDrawing,
  initWindow,
} from '/~raylib/wrapper/index.js';

export function createUpdateDrawFrameContext (framesPerSecond, callback) {
  let fps;
  if (!RL.callback) {
    RL.callback = callback;
    fps = (1000 / framesPerSecond);

    function update () {
      setTimeout (function() {
        console.log ('- updating and rendering');
        callback ();
        requestAnimationFrame (update);
      }, fps);
    }
    requestAnimationFrame (update);
  }
}

export function mainLoopFunction () {
  let x;

  x = 10;
  setInterval (() => {
    x = x + 1;
  }, 100);

  initWindow (640, 480, 'Test Game 1');
  createUpdateDrawFrameContext (24, function () {
    // Update
    // ...

    // Render
    beginDrawing ();
    clearBackground (BLACK);
    drawText ('Hello Gaming World!', x, 20, 20, LIGHTGRAY);
    endDrawing ();
  });
}

