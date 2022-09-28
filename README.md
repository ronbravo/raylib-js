# Raylib-Js

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

Note that this installation might take awhile depending on your environment setup. This is because a lot of packages for the OS and nodejs have to be installed after which the building of raylib will happen. So go grab a cup of coffee...

This should then make sure git, build-essentials, emsdk, and raylib is installed and setup.

## Requirements

This project can be used without the auto setup script. One can manually setup this project but will need to make sure the following items are setup for the development and build environment.

* `git`
* `nodejs`
* `build-essential`
* `emsdk`
* `raylib` - must be buildable with WASM (desktop build is optional)
