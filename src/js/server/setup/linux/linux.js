import { spawn } from 'child_process';
import fs from 'fs-extra';
import { homedir } from 'os';
import { join, resolve } from 'path';

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

export async function start () {
  let base, exists, pkg, result;

  try {
    base = resolve (homedir (), 'raylib-projects');
    await fs.ensureDir (base);
    process.chdir (base);

    // Ensure build-essential is installed
    pkg = 'build-essential';
    result = await run (`dpkg -s ${pkg}`, isInstalled);
    if (!result) { await run (`sudo apt-get install ${pkg}`); }

    // Ensure git is installed
    pkg = 'git';
    result = await run (`dpkg -s ${pkg}`, isInstalled);
    if (!result) { await run (`sudo apt-get install ${pkg}`); }

    // Ensure build-essential is installed
    pkg = 'cmake';
    result = await run (`dpkg -s ${pkg}`, isInstalled);
    if (!result) { await run (`sudo apt-get install ${pkg}`); }

    // Install raylib build dependencies.
    result = await run (`sudo apt install libasound2-dev mesa-common-dev libx11-dev libxrandr-dev libxi-dev xorg-dev libgl1-mesa-dev libglu1-mesa-dev`);

    // Grab the emscripten repo
    exists = await fs.pathExists (join (base, 'emsdk'))
    if (!exists) {
      await run (`git clone https://github.com/emscripten-core/emsdk.git emsdk`);
      process.chdir ('./emsdk');
      await run (`git pull`);
      await run (`./emsdk install latest`);
      await run (`./emsdk activate latest`);
      process.chdir ('..');
    }

    // Grab the raylib repo
    exists = await fs.pathExists (join (base, 'raylib'))
    if (!exists) {
      await run (`git clone https://github.com/raysan5/raylib.git raylib`);
      process.chdir ('./raylib');
      await run (`git pull`);
      await run (`cd raylib/src`);
      await run (BUILD_RAYLIB_HTML5);
      await run (`make clean`);
      process.chdir ('..');
    }

    // Done
    console.log ('- all done');
  }
  catch (err) {
    console.log (err.message);
  }
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

start ();

export const BUILD_RAYLIB_HTML5 = `
- building raylib for HTML5
. ~/raylib-projects/emsdk/emsdk_env.sh
make PLATFORM=PLATFORM_WEB
`;






// child.stdout.on ('data', (data) => {
//   if (!cb) {
//     console.log (data.toString ());
//   }
//   else {
//     buffer = buffer + data.toString ();
//   }
// });

// child.stderr.on ('error', (data) => {
//   console.error (`SPAWN ERROR: \n${data}`);
//   // cancel (data.toString ());
// });
