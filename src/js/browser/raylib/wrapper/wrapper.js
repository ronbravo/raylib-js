const shared = {
  rl: {},
};

export function getShared () { return shared; }

export function wrapRaylibFunctions () {
  let rl;

  rl = shared.rl;

  // test function
  const rl_test = Module.cwrap ('rl_test', 'number', ['number']);

  rl.CloseWindow = Module.cwrap ('rl_CloseWindow', null, [null]);
  rl.BeginDrawing = Module.cwrap ('rl_BeginDrawing', null, [null]);
  rl.ClearBackground = Module.cwrap ('rl_ClearBackground', null, [null]);
  rl.DrawText = Module.cwrap ('rl_DrawText', null, ['string', 'number', 'number', 'number']);
  rl.EndDrawing = Module.cwrap ('rl_EndDrawing', null, [null]);
  rl.InitWindow = Module.cwrap ('rl_InitWindow', null, ['number', 'number', 'string']);
}
