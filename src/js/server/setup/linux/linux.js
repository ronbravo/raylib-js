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

    // Ensure git is installed
    pkg = 'git';
    result = await run (`dpkg -s ${pkg}`, isInstalled);
    if (!result) { await run (`sudo apt-get install ${pkg}`); }

    // Ensure build-essential is installed
    pkg = 'build-essential';
    result = await run (`dpkg -s ${pkg}`, isInstalled);
    if (!result) { await run (`sudo apt-get install ${pkg}`); }

    // Grab the emscripten repo
    exists = await fs.pathExists (join (base, 'emsdk'))
    if (!exists) {
      await run (`git clone https://github.com/emscripten-core/emsdk.git`);
    }

    process.chdir ('./emsdk');
    await run (`git pull`);
    await run (`./emsdk install latest`);
    await run (`./emsdk activate latest`);
    await run (`source ${join (base, 'emsdk')}/emsdk_env.sh`);

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