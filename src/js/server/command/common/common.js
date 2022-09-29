import { spawn } from 'child_process';
import { homedir } from 'os';
import { resolve } from 'path';

export const EMSDK_NODE_VERSION = `/node/14.18.2_64bit/bin`;
export const EMSDK_UPSTREAM     = `/upstream/emscripten`;

export function getBasePath () {
  return resolve (homedir (), 'tm-drive', 'build', 'raylib-projects');
}

export function getEmSdkPath () {
  let emsdk;
  emsdk = getBasePath () + '/emsdk';
  return `export PATH=$PATH:${ emsdk }:${ emsdk + EMSDK_NODE_VERSION }:${ emsdk + EMSDK_UPSTREAM }`;
}

export async function run (command, cb) {
  return new Promise (function (done, cancel) {
    let child, buffer;

    buffer = '';
    child = spawn (command, {
      stdio: 'inherit',
      shell: true,
    });

    child.on ('exit', function () {
      let result;
      if (cb !== undefined) {
        result = cb (buffer);
      }
      done (result);
    });
  });
}
