# Raylib-Js

**NOTE:** Please do **NOT** use this library yet...
> This library is **not** ready for use. Once it is released (hopefully by November of 2022) then this doc will be updated with a better way to install and run.

Binding browser side Javascript with the raylib game programming library.

## Install and Setup

First make sure to install the library

```
npm install @ronbravo/raylib-js
yarn add @ronbravo/raylib-js
```

Then run the setup. **NOTE:** This setup currently only works for a Debian Linux environment.  In the future support for MacOS or Windows might be added.

Next run the setup and build command for the project where you will be ased to enter your **sudo creds**. To setup run:

```
npx rljs-setup
```

Note that this installation might take awhile (roughly 15 minutes or so...) depending on your environment setup. This is because a lot of packages for the OS and nodejs have to be installed after which the building of raylib will happen. So go grab a cup of coffee...

This should then make sure git, build-essentials, emsdk, and raylib is installed and setup.

## Requirements

This project can be used without the auto setup script. One can manually setup this project but will need to make sure the following items are setup for the development and build environment.

* `git`
* `nodejs`
* `build-essential`
* `emsdk`
* `raylib` - must be buildable with WASM (desktop build is optional)

## Resources

### Raylib

* [Raylib](https://www.raylib.com/)
* [Raylib Cheatsheet](https://www.raylib.com/cheatsheet/cheatsheet.html)
* [Working on GNU Linux](https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux)
* [Working for Web (HTML5)](https://github.com/raysan5/raylib/wiki/Working-for-Web-(HTML5))

### WebAssembly

* [Mozilla Tutorials on WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
* [Emscripten](https://emscripten.org/index.html) - A toolchain for building WebAssembly
* [WASMFiddle](https://wasdk.github.io/WasmFiddle/)

### Javascript

* [VueJs](https://vuejs.org/) - Used to build out the UI environment
* [UIKit](https://getuikit.com/docs/card) - Styled components for the UI
* [AnimeJs](https://animejs.com/documentation/) - Animation and keyframeing library

### Misc

* [ts2c - Typscript to C](https://github.com/andrei-markeev/ts2c)
* [ts2c - Online Preview](https://andrei-markeev.github.io/ts2c/)
* [Blitz3d](https://kippykip.com/b3ddocs/commands/index.htm) - Raylib api feels similar to working in Blitz3d
* [QuickJs](https://bellard.org/quickjs/) - An embeddable JS Engine
