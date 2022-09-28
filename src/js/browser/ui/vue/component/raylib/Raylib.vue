<template>
<div>
  <hr/>
  <figure style="overflow:visible;" id="spinner"><div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center></figure>
  <div class="emscripten" id="status">Downloading...</div>
  <div class="emscripten">
    <progress value="0" max="100" id="progress" hidden=1></progress>
  </div>
  <div class="emscripten_border">
    <canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()" tabindex=-1></canvas>
  </div>
  <hr/>
  <div class="emscripten">
    <input type="checkbox" id="resize">Resize canvas
    <input type="checkbox" id="pointerLock" checked>Lock/hide mouse pointer
    &nbsp;&nbsp;&nbsp;
    <input type="button" value="Fullscreen" onclick="Module.requestFullscreen(document.getElementById('pointerLock').checked,
                                                                              document.getElementById('resize').checked)">
  </div>

  <hr/>
  <textarea class="emscripten" id="output" rows="8"></textarea>
  <hr>
</div>
</template>

<script>
import { startRaylib } from '../../../../raylib/index.js';

export default {
  mounted () {
    startRaylib ();
  }
}
</script>
