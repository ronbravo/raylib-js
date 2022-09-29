
function setupWasmArea () {
  var statusElement = document.getElementById('status');
  var progressElement = document.getElementById('progress');
  var spinnerElement = document.getElementById('spinner');

  var Module = {
    preRun: [],
    postRun: [
      wrapRaylibFunctions,
    ],
    print: (function() {
      var element = document.getElementById('output');
      if (element) element.value = ''; // clear browser cache
      return function(text) {
        if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
        // These replacements are necessary if you render to raw HTML
        //text = text.replace(/&/g, "&amp;");
        //text = text.replace(/</g, "&lt;");
        //text = text.replace(/>/g, "&gt;");
        //text = text.replace('\n', '<br>', 'g');
        console.log(text);
        if (element) {
          element.value += text + "\n";
          element.scrollTop = element.scrollHeight; // focus on bottom
        }
      };
    })(),
    canvas: (function() {
      var canvas = document.getElementById('canvas');

      // As a default initial behavior, pop up an alert when webgl context is lost. To make your
      // application robust, you may want to override this behavior before shipping!
      // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
      canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);

      return canvas;
    })(),
    setStatus: function(text) {
      if (!Module.setStatus.last) Module.setStatus.last = { time: Date.now(), text: '' };
      if (text === Module.setStatus.last.text) return;
      var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
      var now = Date.now();
      if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
      Module.setStatus.last.time = now;
      Module.setStatus.last.text = text;
      if (m) {
        text = m[1];
        progressElement.value = parseInt(m[2])*100;
        progressElement.max = parseInt(m[4])*100;
        progressElement.hidden = false;
        spinnerElement.hidden = false;
      } else {
        progressElement.value = null;
        progressElement.max = null;
        progressElement.hidden = true;
        if (!text) spinnerElement.hidden = true;
      }
      statusElement.innerHTML = text;
    },
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
      this.totalDependencies = Math.max(this.totalDependencies, left);
      Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
    }
  };
  Module.setStatus('Downloading...');
  window.onerror = function() {
    Module.setStatus('Exception thrown, see JavaScript console');
    spinnerElement.style.display = 'none';
    Module.setStatus = function(text) {
      if (text) console.error('[post-exception status] ' + text);
    };
  };
  globalThis.Module = Module;
}

async function loadRaylib () {
  let dom;
  dom = document.createElement ('script');
  dom.async = true;
  dom.src = '/lib/raylib/raylib.js';
  document.body.appendChild (dom);
  // WebAssembly.instantiateStreaming (fetch ('index.wasm'), {})
  //   .then (results => {
  //     var sum = results.instance.exports.sumOfInts (32);
  //     console.log ('bob', sum);
  //   });
}

export function wrapRaylibFunctions () {
  // test function
  const rl_test = Module.cwrap ('rl_test', 'number', ['number']);

  const closeWindow = Module.cwrap ('rl_CloseWindow', null, [null]);
  const beginDrawing = Module.cwrap ('rl_BeginDrawing', null, [null]);
  const clearBackground = Module.cwrap ('rl_ClearBackground', null, [null]);
  const drawText = Module.cwrap ('rl_DrawText', null, ['string', 'number', 'number', 'number']);
  const endDrawing = Module.cwrap ('rl_EndDrawing', null, [null]);
  const initWindow = Module.cwrap ('rl_InitWindow', null, ['number', 'number', 'string']);

  initWindow (320, 240, 'Bob');

  beginDrawing ();
  clearBackground ();
  drawText ('Bobby...', 0, 0, 20);
  endDrawing ();

  // setInterval (function () {

  //   endDraw ();
  // }, 100);
  // drawText ('Congrats! You created your first window!', 100, 100, 20, null);

  setTimeout (() => {
    closeWindow ();
    initWindow (640, 480, 'Bob');
  }, 5000);
}

export function startRaylib () {
  console.log ('starting raylib...');
  setupWasmArea ();
  setTimeout (() => {
    loadRaylib ();
  }, 100);
}

// setInterval (() => {
//   console.log ('time...');
//   int_sqrt (Date.now ());
// }, 1000);

// console.log (int_sqrt (5));
// console.log (int_sqrt (50));
// let value;
// value = 0;
// setInterval (function () {
//   value = int_sqrt (value);
//   console.log ('sqrt: ', value);
// }, 1000);

// const log = Module.cwrap ('rljs_Console_Log');

// const pauseMainLoop = Module.cwrap ('rljs_Pause_Main_Loop');
// const resumeMainLoop = Module.cwrap ('rljs_Resume_Main_Loop');

// setTimeout (() => {
//   resumeMainLoop ();

// }, 100);

// setTimeout (() => {
//   resumeMainLoop ();
// }, 200);

// const exitApp = Module.cwrap ('rljs_ExitApp');
// const initWindow = Module.cwrap ('rl_InitWindow', null, ['number', 'number', 'string']);

// setInterval (() => {
//   // initWindow (320, 240, 'Hello Bob');
//   // exitApp ();
//   console.log ('what...')
//   log ();
// }, 1000);

// window.addEventListener ('click', function () {
//   console.log ('hello world');
//   int_sqrt (10);
// })