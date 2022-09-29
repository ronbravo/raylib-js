import { getEmSdkPath, run } from '../../common/index.js';
import { EXPORTED_FUNCTIONS } from '../exported-functions.js';

export const BUILD_OUTPUT   = `public/lib/raylib/raylib.html`;
export const BUILD_SOURCE   = `src/c/raylib.c`;
export const HTML_TEMPLATE  = `src/html/basic.html`;
export const RAYLIB_PATH    = `~/tm-drive/build/raylib-projects/raylib`;
export const RAYLIB_SOURCE  = `${ RAYLIB_PATH }/src`;

export const BUILD_PROJECT_HTML5 = `
${ getEmSdkPath () }
# echo $PATH
echo "- building project for HTML5"
emcc -o ${ BUILD_OUTPUT } ${ BUILD_SOURCE } \
  -Os -Wall \
  ${ RAYLIB_SOURCE }/libraylib.a \
  -I ${ RAYLIB_SOURCE } \
  -s USE_GLFW=3 \
  --shell-file ${ HTML_TEMPLATE } \
  -DPLATFORM_WEB \
  -sEXPORTED_RUNTIME_METHODS=ccall,cwrap \
  -sEXPORTED_FUNCTIONS=${ getExportedMethods () }
`;

export async function buildRaylibHtml5 () {
  console.log ('cool');
  await run (BUILD_PROJECT_HTML5);
}

export function getExportedMethods () {
  let list;

  list = '_' + EXPORTED_FUNCTIONS.join (',_');
  return list;

  console.log ('LIST:', list);
  return `_main,_int_sqrt`;
}

// `
// cd src
// make clean
// make PLATFORM=PLATFORM_WEB
// `;

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