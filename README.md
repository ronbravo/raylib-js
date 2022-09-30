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

**NOTE:** This install currently only works for a Debian Linux environment. In the future support for MacOS or Windows might be added.

Next run the setup and build command for the project where you will be asked to enter your **sudo creds**. To setup run:

```
npx rljs-setup
```

This installation might take some time (roughly 15 minutes or so...) depending on your environment setup. This is because a lot of packages for the OS and nodejs have to be installed after which the building of raylib will happen. So go grab a cup of coffee...

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
