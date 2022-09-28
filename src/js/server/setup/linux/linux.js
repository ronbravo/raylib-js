import { spawn } from 'child_process';
import fs from 'fs-extra';
import { homedir } from 'os';
import { join, resolve } from 'path';

export const EMSDK_NODE_VERSION = `/node/14.18.2_64bit/bin`;
export const EMSDK_UPSTREAM     = `/upstream/emscripten`;

export const BUILD_RAYLIB_HTML5 = `
${ getEmSdkPath () }
# echo $PATH
echo "- building raylib for HTML5"
cd src
make clean
make PLATFORM=PLATFORM_WEB
`;

export async function buildRaylib () {
  let base, exists;

  try {
    base = getBasePath ();

    // Grab the emscripten repo
    exists = await fs.pathExists (join (base, 'emsdk'))
    if (!exists) {
      // Build and install the emsdk
      await run (`git clone https://github.com/emscripten-core/emsdk.git emsdk`);
      process.chdir ('./emsdk');
      await run (`git pull`);
      await run (`./emsdk install latest`);
      await run (`./emsdk activate latest`);
    }
    else {
      process.chdir ('./emsdk');
    }
    process.chdir ('..');

    // Grab the raylib repo
    exists = await fs.pathExists (join (base, 'raylib'))
    if (!exists) {
      await run (`git clone https://github.com/raysan5/raylib.git raylib`);
      process.chdir ('./raylib');
      await run (`git pull`);
    }
    else {
      // Build raylib.
      process.chdir ('./raylib');
    }

    await run (BUILD_RAYLIB_HTML5);
    process.chdir ('..');

    // Done
    console.log ('- all done');
  }
  catch (err) {
    console.error (err.message);
    console.error (err);
  }
}

export function getBasePath () {
  return resolve (homedir (), 'tm-drive', 'build', 'raylib-projects');
}

export function getEmSdkPath () {
  let emsdk;
  emsdk = getBasePath () + '/emsdk';
  return `export PATH=$PATH:${ emsdk }:${ emsdk + EMSDK_NODE_VERSION }:${ emsdk + EMSDK_UPSTREAM }`;
}

export function isInstalled (str) {
  if (str) {
    str = str.split ('\n');
    if (str [1] === 'Status: install ok installed') {
      return true;
    }
    return false;
  }
}

export async function installPackage (pkg) {
  let result;
  result = await run (`dpkg -s ${pkg}`, isInstalled);
  if (!result) { await run (`sudo apt-get install ${pkg}`); }
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

export async function setupRaylib () {
  let base;

  try {
    base = getBasePath ();
    await fs.ensureDir (base);
    process.chdir (base);

    // Ensure build-essential is installed
    await installPackage ('build-essential');

    // Ensure git is installed
    await installPackage ('git');

    // Ensure build-essential is installed
    await installPackage ('cmake');

    // Install raylib build dependencies.
    await run (`sudo apt install --assume-yes libasound2-dev mesa-common-dev libx11-dev libxrandr-dev libxi-dev xorg-dev libgl1-mesa-dev libglu1-mesa-dev`);

    await buildRaylib ();
  }
  catch (err) {
    console.error (err.message);
    console.error (err);
  }
}
