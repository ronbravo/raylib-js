const shared = {
  rl: {},
};

export const RL = shared.rl;

export function wrapRaylibFunctions () {
  let rl;

  rl = shared.rl;

  // test function
  const rl_test = Module.cwrap ('rl_test', 'number', ['number']);

  // Window
  rl.CloseWindow = Module.cwrap ('rl_CloseWindow', null, [null]);
  rl.InitWindow = Module.cwrap ('rl_InitWindow', null, ['number', 'number', 'string']);

  // Drawing
  rl.BeginDrawing = Module.cwrap ('rl_BeginDrawing', null, [null]);
  rl.ClearBackground = Module.cwrap ('rl_ClearBackground', null, ['number']);
  rl.DrawText = Module.cwrap ('rl_DrawText', null, ['string', 'number', 'number', 'number', 'number']);
  rl.EndDrawing = Module.cwrap ('rl_EndDrawing', null, [null]);

  // rl.getColors = Module.cwrap ('rl_getColors', 'number', [null]);
  // let bob = rl.getColors ();
  // console.log ('bob:', bob);
}
