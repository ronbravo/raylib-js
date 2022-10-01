import { getEmSdkPath, run } from '../../common/index.js';
import { EXPORTED_FUNCTIONS } from '../exported-functions.js';

export const BUILD_OUTPUT   = `public/lib/raylib/raylib.html`;
export const BUILD_STATS    = `public/lib/raylib/raylib.txt`;
export const BUILD_SOURCE   = `src/c/main.c`;
export const HTML_TEMPLATE  = `src/html/basic.html`;
export const RAYLIB_PATH    = `~/tm-drive/build/raylib-projects/raylib`;
export const RAYLIB_LIB     = `${ RAYLIB_PATH }/src`;
export const RAYLIB_JS_PATH = `src/c/raylib`;

export const BUILD_PROJECT_HTML5 = `
${ getEmSdkPath () }
# echo $PATH
echo "- building project for HTML5"
emcc -o ${ BUILD_OUTPUT } ${ BUILD_SOURCE } \
  -Os -Wall \
  ${ RAYLIB_LIB }/libraylib.a \
  -I ${ RAYLIB_LIB } \
  -I ${ RAYLIB_JS_PATH } \
  -s USE_GLFW=3 \
  --shell-file ${ HTML_TEMPLATE } \
  -DPLATFORM_WEB \
  -sEXPORTED_RUNTIME_METHODS=ccall,cwrap \
  -sEXPORTED_FUNCTIONS=${ getExportedMethods () }
`;

export async function buildRaylibHtml5 () {
  await run (BUILD_PROJECT_HTML5);
  await run (`touch ${ BUILD_STATS }`);
}

export function getExportedMethods () {
  let list;

  list = '_' + EXPORTED_FUNCTIONS.join (',_');
  return list;
}
