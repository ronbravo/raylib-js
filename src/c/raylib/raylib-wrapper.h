#include "raylib.h"
#include "colors.h"

void rl_BeginDrawing (void) {
  BeginDrawing ();
}

void rl_ClearBackground (int color) {
  ClearBackground (p_colors [color]);
}

void rl_CloseWindow (void) {
  CloseWindow ();
}

void rl_DrawText (const char * text, int x, int y, int fontSize, int color) {
  DrawText (text, x, y, fontSize, p_colors [color]);
}

void rl_EndDrawing (void) {
  EndDrawing ();
}

void rl_getColor (void) {
}

void rl_InitWindow (int width, int height, const char *title) {
  InitWindow (width, height, title);
}
