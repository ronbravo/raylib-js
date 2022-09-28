import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

export function start () {
  // loads the Icon plugin
  UIkit.use(Icons);

  // components can be called from the imported UIkit reference
  UIkit.notification('Welcome to Raylib JS.');
}

start ();
