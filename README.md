# Raylib-Js

Binding browser side Javascript with the raylib game programming library.

## Install and Setup

First make sure to install the library

```
npm install @ronbravo/raylib-js
yarn add @ronbravo/raylib-js
```

Then run the setup. **NOTE:** This setup currently only works for a Debian Linux environment. In the future support for MacOS or Windows might be added.

```
npx rljs-setup
```

This should then make sure git, build-essentials, emsdk, and raylib is installed and setup.

## Requirements

This project can be used without the auto setup script. One can manually setup this project but will need to make sure the following items are setup for the development and build environment.

* `git`
* `nodejs`
* `build-essential`
* `emsdk`
* `raylib` - must be buildable with WASM (desktop build is optional)
