
/*
* GL02Primitive.cpp: Vertex, Primitive and Color
* Draw Simple 2D colored Shapes: quad, triangle and polygon.
*/
#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
void myInit(void)
{
glClearColor(1.0,1.0,1.0,0.0); // set white background color
glPointSize(4.0); // a ‘dot’ is 4 by 4 pixels
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}
//<<<<<<<<<<<<<<<<<<<<<<<< myDisplay >>>>>>>>>>>>>>>>>
void myDisplay(void)
{
glClear(GL_COLOR_BUFFER_BIT); // clear the screen

glColor3f(1.0f, 0.5f, 0.0f); // set the drawing color
glBegin(GL_POLYGON);
glVertex2i(170, 100); // draw three points
glVertex2i(330, 100);
glVertex2i(330, 250);
glVertex2i(170, 250);
glEnd();

glColor3f(0.0f, 0.0f, 0.0f); // set the drawing color
glBegin(GL_POLYGON);
glVertex2i(150, 250); // draw three points
glVertex2i(350, 250);
glVertex2i(250, 400);
glEnd();

glColor3f(1.0f, 1.0f, 1.0f); // set the drawing color
glBegin(GL_POLYGON);
glVertex2i(275, 110); // draw three points
glVertex2i(310, 110);
glVertex2i(310, 230);
glVertex2i(275, 230);
glEnd();

glColor3f(1.0f, 1.0f, 1.0f); // set the drawing color
glBegin(GL_POLYGON);
glVertex2i(210, 190); // draw three points
glVertex2i(250, 190);
glVertex2i(250, 230);
glVertex2i(210, 230);
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
