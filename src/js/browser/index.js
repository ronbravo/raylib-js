import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import './style.less';

import { setupVue } from './ui/vue';

export function start () {
  // loads the Icon plugin
  UIkit.use (Icons);

  // // components can be called from the imported UIkit reference
  // UIkit.notification ('App is ready', {
  //   // pos: 'bottom-center',
  //   timeout: 500
  // });

  document.title = 'Raylib-JS';
  setupVue ();
}

start ();
