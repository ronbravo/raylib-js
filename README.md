# Raylib-Js

**NOTE:** Please do **NOT** use this library yet...
> This library is **not** ready for use. Once it is released (hopefully by November of 2022) then this doc will be updated with a better way to install and run.

Binding browser side Javascript with the raylib game programming library. The purpose in binding to browser side Javascript is to take advantage of development environmet tools (vitejs, nodemon, refresh on change, etc). Now this is not expected to run fast as the purpose is to allow an easy foot in the door and allow working with Javascript. As the developer matures and becomes more familiar with the Raylib API and programming in general, the hope is they begin to transition to C by porting some of their projects.

Hopefully in the future this project will support a C workflow in the browser as to facilitate that process even more.

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
* [Mozilla Requestframe](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* [Requestframe Tutorial](https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm)

### Misc

* [ts2c - Typscript to C](https://github.com/andrei-markeev/ts2c)
* [ts2c - Online Preview](https://andrei-markeev.github.io/ts2c/)
* [Blitz3d](https://kippykip.com/b3ddocs/commands/index.htm) - Raylib api feels similar to working in Blitz3d
* [QuickJs](https://bellard.org/quickjs/) - An embeddable JS Engine
* [8bit Workshop](https://8bitworkshop.com/)

