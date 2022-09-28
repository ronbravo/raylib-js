
function setupWasmArea () {
  var statusElement = document.getElementById('status');
  var progressElement = document.getElementById('progress');
  var spinnerElement = document.getElementById('spinner');

  var Module = {
    preRun: [],
    postRun: [
      function () {
        console.log ('cool');

        const int_sqrt = Module.cwrap ('int_sqrt', 'number', ['number']);
        // console.log (int_sqrt (5));
        // console.log (int_sqrt (50));

        // setInterval (function () {
        //   int_sqrt (10);
        // }, 1000);
      }
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
  // import ('/index.js');
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

export function startRaylib () {
  console.log ('starting raylib...');
  setupWasmArea ();
  loadRaylib ();
}
