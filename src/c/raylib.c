#include <stdio.h>
#include "raylib.h"

int main () {
  printf ("- inside c app...\n");
  return 0;
}

int rl_test (int x) {
  return (x + 1000);
}

// ---------------------------------------------
// Raylib Wrappers
void rl_BeginDrawing (void) {
  BeginDrawing ();
}

void rl_ClearBackground (void) {
  ClearBackground (RAYWHITE);
}

void rl_CloseWindow (void) {
  CloseWindow ();
}

// void rl_DrawText (const char * text, int x, int y, int fontSize, Color color) {
void rl_DrawText (const char * text, int x, int y, int fontSize) {
  DrawText (text, x, y, fontSize, LIGHTGRAY);
}

void rl_EndDrawing (void) {
  EndDrawing ();
}

void rl_getColor (void) {
}

void rl_InitWindow (int width, int height, const char *title) {
  InitWindow (width, height, title);
}

// ---------------------------------------------
// #include <stdio.h>
// #include <emscripten/emscripten.h>

// void update (void);

// int main () {
//   #if defined (PLATFORM_WEB)
//     emscripten_set_main_loop (update, 0, 1);
//   #endif
//   return 0;
// }

// void update (void) {
//   emscripten_pause_main_loop ();
//   printf ("Hello World bobby\n");
// }

// void rljs_Console_Log (void) {
//   printf ("This is a test");
// }

// void rljs_Pause_Main_Loop () {
//   emscripten_pause_main_loop ();
// }

// void rljs_Resume_Main_Loop () {
//   emscripten_resume_main_loop ();
// }

// /*******************************************************************************************
// *
// *   raylib [core] example - Basic window (adapted for HTML5 platform)
// *
// *   NOTE: This example is prepared to compile for PLATFORM_WEB, PLATFORM_DESKTOP and PLATFORM_RPI
// *   As you will notice, code structure is slightly diferent to the other examples...
// *   To compile it for PLATFORM_WEB just uncomment #define PLATFORM_WEB at beginning
// *
// *   Example originally created with raylib 1.3, last time updated with raylib 1.3
// *
// *   Example licensed under an unmodified zlib/libpng license, which is an OSI-certified,
// *   BSD-like license that allows static linking with closed source software
// *
// *   Copyright (c) 2015-2022 Ramon Santamaria (@raysan5)
// *
// ********************************************************************************************/

// #include "raylib.h"

// //#define PLATFORM_WEB

// #if defined(PLATFORM_WEB)
//     #include <emscripten/emscripten.h>
// #endif

// //----------------------------------------------------------------------------------
// // Global Variables Definition
// //----------------------------------------------------------------------------------
// const int screenWidth = 640;
// const int screenHeight = 480;
// bool exit_app = false;

// //----------------------------------------------------------------------------------
// // Module functions declaration
// //----------------------------------------------------------------------------------
// void UpdateDrawFrame(void);     // Update and Draw one frame

// //------------------------------------------------------------------------------------
// // Program main entry point
// //------------------------------------------------------------------------------------
// int main(void)
// {
//     // Initialization
//     //--------------------------------------------------------------------------------------
//     InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");

// #if defined(PLATFORM_WEB)
//     emscripten_set_main_loop(UpdateDrawFrame, 0, 1);
// #else
//     // SetTargetFPS(60);   // Set our game to run at 60 frames-per-second
//     //--------------------------------------------------------------------------------------

//     // Main game loop
//     while (!WindowShouldClose())    // Detect window close button or ESC key
//     {
//         UpdateDrawFrame();
//     }
// #endif

//     // De-Initialization
//     //--------------------------------------------------------------------------------------
//     CloseWindow();        // Close window and OpenGL context
//     //--------------------------------------------------------------------------------------
// }

// //----------------------------------------------------------------------------------
// // Module Functions Definition
// //----------------------------------------------------------------------------------
// int xpos = 0;
// bool render = false;

// void UpdateDrawFrame(void)
// {
//     // Update
//     //----------------------------------------------------------------------------------
//     // TODO: Update your variables here
//     //----------------------------------------------------------------------------------

//     // Draw
//     //----------------------------------------------------------------------------------
//     BeginDrawing();

//         ClearBackground(RAYWHITE);

//         DrawText("Congrats! You created your first window!", xpos, 200, 20, LIGHTGRAY);

//     EndDrawing();
//     //----------------------------------------------------------------------------------
// }

// void rl_BeginDrawing (void) {}
// void rl_ClearBackground (void) {}
// void rl_CloseWindow (void) {
//     CloseWindow ();
// }
// void rl_DrawText (void) {}
// void rl_EndDrawing (void) {}
// void rl_InitWindow (int width, int height, const char *title) {
//     InitWindow (width, height, title);
// }
// void rljs_ExitApp (void) {
//     exit_app = true;
// }
// void rljs_Log (void) {
//     printf ("This is a test...");
// }

// // EMSCRIPTEN_KEEPALIVE__fsafds
// int sumOfInts (int num) {
//   return (num + 100);
// }

// int int_sqrt(int x) {
// //   printf ("***** HERE NOW COOL *****");
//   printf ("Hello World bobby\n");
//   if (render == true) {
//     render = false;
//   }
//   else {
//     render = true;
//   }
// //   UpdateDrawFrame();
//   xpos = xpos + x;
//   return (x + 1000);
// }
