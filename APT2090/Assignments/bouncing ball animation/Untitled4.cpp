
/*
* GL02Primitive.cpp: Vertex, Primitive and Color
* Draw Simple 2D colored Shapes: quad, triangle and polygon.
*/
#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
static int flag=0;
float tx=0.0,ty=0.0,tz=0.0;
float ball_x=0.5,ball_y=0.0,ball_z=0.0;

void glutInitRendering(){
	glEnable(GL_DEPTH_TEST);
}

void reshaped(int w, int h){
	glViewport(0,0,w,h);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(45,0, 1, 200);
}

void updateBall()
{
    if(!flag)
    {
        ball_y+=0.05;
        if(ball_y>1.0)
            flag=1;
    }
    if(flag)
    {
        ball_y-=0.05;
        if(ball_y<-1)
            flag=0;
    }
}
void display()
{
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
    glClearColor(0,1,0,0);
//    glPushMatrix(); 
//    glBegin(GL_POLYGON);
//    glColor3f(1,0,1); 
//    glVertex3f(-0.25,0,-1);
//    glVertex3f(0.25,0,-1);
//    glVertex3f(0,0.25,-1);
//    glEnd();
//    glPopMatrix();
    glPushMatrix();
    glColor3f(1,1,0);
    glTranslatef(ball_x,ball_y,ball_z);
    glutSolidSphere(0.3,60,23);
    glPopMatrix();
	updateBall();
    glutSwapBuffers();
}

void keyPressed(int key, int x, int y){
}
//<<<<<<<<<<<<<<<<<<<<<<<< main >>>>>>>>>>>>>>>>>>>>>>
int main(int argc, char** argv)
{
	glutInit(&argc, argv); // initialize the toolkit
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH); // set display mode
	glutInitWindowSize(700,800); // set window size
	glutCreateWindow("Bouncing Ball"); // open the screen window
	glutInitRendering();
	glutReshapeFunc(reshaped);
	glutDisplayFunc(display); // register redraw function
	glutIdleFunc(display);
	glutSpecialFunc(keyPressed);
	glutMainLoop(); // go into a perpetual loop
	return 0;
}
