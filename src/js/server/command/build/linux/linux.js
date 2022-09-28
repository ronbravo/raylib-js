
export async function buildRaylibHtml5 () {
  console.log ('cool');
}


/*
# Must include the glfw header file?
# ref: https://stackoverflow.com/a/28522269
# emcc -c rcore.c -Os -Wall -DPLATFORM_WEB -DGRAPHICS_API_OPENGL_ES2 -I ../examples/others/external/include/

#emcc -o game.html game.c -Os -Wall ./path-to/libraylib.a -I. -Ipath-to-raylib-h -L. -Lpath-to-libraylib-a -s USE_GLFW=3 --shell-file path-to/shell.html -DPLATFORM_WEB

RAYLIB_PATH=/home/ninabravo/tm-drive/ronbravo/dev/gamedev/raylib/src
OUTPUT_PATH=./dist/public

emcc -o $OUTPUT_PATH/index.html src/game.c \
  -Os -Wall \
  $RAYLIB_PATH/libraylib.a \
  -I $RAYLIB_PATH \
  -s USE_GLFW=3 \
  --shell-file html_template/basic.html \
  -DPLATFORM_WEB \
  -sEXPORTED_FUNCTIONS=_main,_int_sqrt -sEXPORTED_RUNTIME_METHODS=ccall,cwrap

  # -I. -Ipath-to-raylib-h \
  # -L. -Lpath-to-libraylib-a \
  # -s USE_GLFW=3 \
  # --shell-file html_template/shell.html \
  # -DPLATFORM_WEB

# -------------------
# Misc

# https://github.com/raysan5/raylib/blob/master/examples/core/core_basic_window_web.c
# https://github.com/raysan5/raylib/wiki/Working-for-Web-(HTML5)
# https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux
# https://github.com/emscripten-core/emscripten/wiki/WebAssembly-Standalone
# https://kippykip.com/b3ddocs/commands/index.htm


*/