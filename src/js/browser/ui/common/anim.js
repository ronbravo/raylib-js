import anime from 'animejs';

export function fadeInBody () {
  let dom;
  dom = document.body;
  anime({
    targets: [dom],
    keyframes: [
      { opacity: 0 },
      { opacity: 1, duration: 0.7 * 1000 },
    ],
  });
}