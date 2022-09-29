import Raylib from '/~ui/vue/basic/raylib/Raylib.vue';
import { fadeInBody } from '/~ui/common';

export default {
  components: {
    Raylib,
  },
  mounted () {
    fadeInBody ();
  },
}
