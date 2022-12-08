
/*
* GL02Primitive.cpp: Vertex, Primitive and Color
* Draw Simple 2D colored Shapes: quad, triangle and polygon.
*/
#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
#include "math.h"
void myInit(void)
{
glClearColor(1.0,1.0,1.0,0.0); // set white background color
glColor3f(0.0f, 0.0f, 0.0f); // set the drawing color
glPointSize(4.0); // a ‘dot’ is 4 by 4 pixels
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(-10.0, 10.0, -1.0, 1.0);
glViewport(0, 0, 640, 480);
}
//<<<<<<<<<<<<<<<<<<<<<<<< myDisplay >>>>>>>>>>>>>>>>>
void myDisplay(void)
{
glClear(GL_COLOR_BUFFER_BIT); // clear the screen
glColor3f(1.0f, 0.0f, 0.0f);
glBegin(GL_LINE_STRIP);
GLdouble x, y;
for(x=-10.0; x<=10.0; x=x+0.1)
{
	y=sin(x);
	glVertex2d(x, y);
}
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
