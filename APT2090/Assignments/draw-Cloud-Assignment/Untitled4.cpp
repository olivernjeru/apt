
/*
* GL02Primitive.cpp: Vertex, Primitive and Color
* Draw Simple 2D colored Shapes: quad, triangle and polygon.
*/
#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
#include <math.h>
void myInit(void)
{
glClearColor(1.0,1.0,1.0,0.0); // set white background color
glColor3f(0.0f, 0.0f, 0.0f); // set the drawing color
glPointSize(4.0); // a ‘dot’ is 4 by 4 pixels
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}
//<<<<<<<<<<<<<<<<<<<<<<<< myDisplay >>>>>>>>>>>>>>>>>
void outwardCircle(float cx, float cy, float r, int num_segments){
	glBegin(GL_LINE_LOOP);
	glColor3f(0,0.5,0);
	for(int j = 0; j < num_segments; j++) {
		float theta = 2.0f * 3.1415926f * float(j) / float(num_segments);
		float x = r * cosf(theta);
		float y = r * sinf(theta);
		glVertex2f(x + cx, y + cy);
	}
	glEnd();
}

void innerCircle(float cx, float cy, float r, int num_segments){
	glBegin(GL_POLYGON);
	glColor3f(1,1,1);
	
	for(int j=0; j < num_segments; j++) {
		float theta = 2.0f * 3.1415926f * float(j) / float(num_segments);
		float x = r * cosf(theta);
		float y = r * sinf(theta);
		glVertex2f(x + cx, y + cy);
	}
	glEnd();
}


void myDisplay(void)
{
glClear(GL_COLOR_BUFFER_BIT); // clear the screen


outwardCircle(160,260,70,100);
outwardCircle(200,300,70,100);
outwardCircle(300,320,70,100);
outwardCircle(400,290,73,100);
outwardCircle(500,300,70,100);
outwardCircle(260,200,70,100);
outwardCircle(350,170,73,100);
outwardCircle(440,190,70,100);
outwardCircle(530,240,70,100);
outwardCircle(400,250,70,100);

innerCircle(200,268,70,100);
innerCircle(195,288,70,100);
innerCircle(260,288,70,100);
innerCircle(370,280,70,100);
innerCircle(470,280,70,100);
innerCircle(502,280,70,100);
innerCircle(484,240,70,100);
innerCircle(400,198,70,100);
innerCircle(300,207,70,100);

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
