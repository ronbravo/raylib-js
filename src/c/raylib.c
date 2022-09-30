#include <malloc.h>
#include <stdio.h>
#include "raylib.h"

Color p_colors [] = {
  LIGHTGRAY,
  GRAY,
  DARKGRAY,
  YELLOW,
  GOLD,
  ORANGE,
  PINK,
  RED,
  MAROON,
  GREEN,
  LIME,
  DARKGREEN,
  SKYBLUE,
  BLUE,
  DARKBLUE,
  PURPLE,
  VIOLET,
  DARKPURPLE,
  BEIGE,
  BROWN,
  DARKBROWN,
  WHITE,
  BLACK,
  BLANK,
  MAGENTA,
  RAYWHITE,
};

int main () {
  return 0;
}

// ---------------------------------------------
// Raylib-Js Wrappers
int rl_test (int x) {
  return (x + 1000);
}

// ---------------------------------------------
// Raylib Wrappers
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






// ---------------------------------------------
/*
// printf ("Color: %d, %d\n", p_colors [0]->r, RED.r);
// printf ("RED: %d\n", *p_colors [0]->r);4
// ClearBackground (p_colors [index]);
// Color color = p_colors [index];
// ClearBackground (color);
// Color color = p_colors [index];
// ClearBackground (BLUE);

typedef struct MyObject {
  int id;
} MyObject;

// struct Color *p_colors[1];

// struct Color p_colors []; //= { RED, BLUE };

// Color p_colors [] = { RED, BLUE };
// Color * p_colors [2];

// Color * p_colors [1];
// Color *p_colors [2]; // = { &RED, &BLUE };
Color p_colors [2] = { RED, BLUE };

int main () {
  // *p_colors [0] = RED;
  // *p_colors [1] = BLUE;

  // printf ("Color: %d, %d\n", p_colors [0]->r, RED.r);

  // printf ("- COLOR: %d\n", p_colors [0]->r);
  // rl_ClearBackground (0);

  // Color bob = { 255, 0, 0, 0 };
  // p_colors [0] = &bob1;

  // printf ("Color: %d, %d, %d\n", p_colors [index]->r, p_colors [index]->g, p_colors [index]->b);

  // bob [0] = &RED;
  // bob [1] = &BLUE;

  // p_colors [0] = RED;
  // p_colors [1] = BLUE;
  // // MyObject *m1 = malloc (sizeof (MyObject));
  // m1->id = 45;

  // // MyObject *m2 = malloc (sizeof (MyObject));
  // // m2->id = 90;

  // struct MyObject *p_objects[1];
  // p_objects[0] = m1;
  // // p_objects[1] = m2;

  // // -----------------------------------
  // a[0] = &RED;
  // b = a;

  // // struct Color * b;
  // // b = &a;

  // // objects[0] = &m1;

  // // p_objects = objects;

  // // MyObject *list = bob;
  // printf ("Bobby: %d\n", p_objects[0]->id);
  // // printf ("Bobby: %d\n", p_objects[1]->id);
  // printf ("Bobby: %d\n", m1->id);

  // printf ("Bobby color: %d\n", a[0]->r);
  // printf ("Bobby color: %d\n", p_colors [0]->r);

  return 0;
}


// struct Student bob;
// bob.id = 45;
// struct Student students[1];
// rl_colors[0] = RED;

// struct Color ;
// = { BLUE, RED };
// Color rl_colors[0] = RED;
// const Colors *const colors[] = { &RED, &BLUE, &GREEN };

// // void rl_getColors () {}
// Color ** rl_getColors () {
//   // Color bob = *p_colors [0];
//   // printf ("RED: %d, %d, %d\n", RED.r, RED.g, RED.b);
//   // printf ("BOB: %d, %d, %d\n", bob.r, bob.g, bob.b);
//   return a;
// }

*/

// struct Color *colors[1];
// struct Color bob = NULL;

// struct Color *colors;

// struct node {
//   int data;
//   struct node *next;
// };

// struct node *head = NULL;
// struct node *n1, *n2, *n3;

// typedef struct Object {
//   int id;
// } Object;

// struct Object *o = NULL;
// struct Color colors[1];

// struct Color* pItems = (Color*)calloc(3, sizeof(struct Color));
// struct Color colors[1];
// static struct colors[] * bob;

// int main () {
//   printf("color: %d\n", RED.r);
//   colors[0] = &RED;

//   bob = colors;

//   // colors[0] = RED;
//   // colors[0] = RED;
//   // colors = malloc (sizeof (struct Color));

//   // static Color *b = NULL;

//   // b = malloc(sizeof(struct Color) * 2);
//   // b[1] = RED;

//   // n1 = (struct node *) malloc(sizeof(struct node));
//   // n2 = (struct node *) malloc(sizeof(struct node));
//   // n3 = (struct node *) malloc(sizeof(struct node));

//   // Object *o = malloc (sizeof (Object));
//   // o->id = 45;
//   // colors[0] = RED;
//   // free (o);

//   // Person *items = malloc (sizeof (struct Person) * 1);
//   // items[0].id = 45;

//   // free(items);
//   // colors[0] = RED;
//   // bob.salary = 45;
//   return 0;
// }

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
