
/*
* GL02Primitive.cpp: Vertex, Primitive and Color
* Draw Simple 2D colored Shapes: quad, triangle and polygon.
*/
#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
void myInit(void)
{
glClearColor(0.0,0.0,0.0,0.0); // set white background color
glPointSize(4.0); // a ‘dot’ is 4 by 4 pixels
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}
//<<<<<<<<<<<<<<<<<<<<<<<< myDisplay >>>>>>>>>>>>>>>>>
void myDisplay(void)
{
glColor3f(1.0f, 1.0f, 1.0f); // set the drawing color
glClear(GL_COLOR_BUFFER_BIT); // clear the screen
glBegin(GL_POINTS);
glVertex2i(450, 200);
glVertex2i(550, 180);
glVertex2i(600, 250);
glVertex2i(400, 300);
glVertex2i(300, 350);
glVertex2i(200, 400);
glVertex2i(100, 470); // draw three points


glEnd();
glFlush(); // send all output to display
}
//<<<<<<<<<<<<<<<<<<<<<<<< main >>>>>>>>>>>>>>>>>>>>>>
int main(int argc, char** argv)
{
glutInit(&argc, argv); // initialize the toolkit
glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB); // set display mode
glutInitWindowSize(640,480); // set window size
glutInitWindowPosition(100, 150); // set window position on screen
glutCreateWindow("Draw DOTS"); // open the screen window
glutDisplayFunc(myDisplay); // register redraw function
myInit();
glutMainLoop(); // go into a perpetual loop
return 0;
}
