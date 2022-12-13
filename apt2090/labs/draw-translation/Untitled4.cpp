#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
/* Initialize OpenGL Graphics */
void initGL() {
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0.0, 1000.0, 0.0, 1000.0);
    glViewport(0,0,1000,1000);
glClearColor(1.0f, 1.0f, 1.0f, 1.0f); // White Background
glClear(GL_COLOR_BUFFER_BIT);
glColor3f(0.0,0.0,0.0);
}


void drawTranslatedDiamond(GLdouble a, GLdouble b){
glMatrixMode(GL_MODELVIEW); // To operate on Model-View matrix
glLoadIdentity(); // Reset the model-view matrix
    glTranslated(a, b, 0.0); // Translate Right and up
    glBegin(GL_POLYGON);
    glColor3f(0.0, 0.0, 0.0);
    glVertex2i(50,0);
    glVertex2i(100,50);
    glVertex2i(50,100);
    glVertex2i(0,50);
    glEnd();
    glFlush(); // Render now
//=====================

//=============================scaling=================
	//glLoadIdentity();
	//glScalef(6.0,8.0,1.0);
	//glBegin(GL_POLYGON);
	//glColor3f(1.0, 0.0, 0.0);
	//glVertex2i(50, 0);
	//glVertex2i(100, 50);
	//glVertex2i(50, 100);
	//glVertex2i(0, 50);
	//glEnd();
    //glFlush();

}
void display() {


//=========================
//Draw before trnaslation
   drawTranslatedDiamond(0.0,  0.0);
//=====================
//Translate by 200 by 200 and draw again
   drawTranslatedDiamond(100.0, 100.0);
   drawTranslatedDiamond(200, 200.0);
   drawTranslatedDiamond(300, 300.0);
   drawTranslatedDiamond(400, 400.0);
   drawTranslatedDiamond(500, 500.0);
   drawTranslatedDiamond(600, 600.0);
   drawTranslatedDiamond(700, 700.0);
   drawTranslatedDiamond(800, 800.0);
   drawTranslatedDiamond(900, 900.0);
//=====================

}
/* Main function: GLUT runs as a console application starting at main() */
int main(int argc, char** argv) {
glutInit(&argc, argv); // Initialize GLUT
glutCreateWindow("Translation Example"); // Create window with the given title
glutInitWindowSize(1000, 1000); // Set the window's initial width & height
glutInitWindowPosition(50, 50); // Position the window's initial top-left corner
initGL();
glutDisplayFunc(display); // Register callback handler for window re-paint event
 // Our own OpenGL initialization
glutMainLoop(); // Enter the event-processing loop
return 0;
}
