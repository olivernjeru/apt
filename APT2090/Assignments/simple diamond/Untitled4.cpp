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


void drawDiamond(GLint center, GLint size){
glMatrixMode(GL_MODELVIEW); // To operate on Model-View matrix
glLoadIdentity(); // Reset the model-view matrix
    glTranslated(center, size, 0.0); // Translate Right and up
    glBegin(GL_POLYGON);
    glColor3f(0.0, 0.0, 0.0);
    glVertex2i(420,550);
    glVertex2i(500,450);
    glVertex2i(580,550);
    glVertex2i(500,650);
    glEnd();
    glFlush(); // Render now
//=====================

}
void display() {


//=========================
//Draw before trnaslation
   drawDiamond(0,  0);
//=====================
//Translate by -400 by 0 and draw again
//   drawDiamond(-400, 0);
   
}
/* Main function: GLUT runs as a console application starting at main() */
int main(int argc, char** argv) {
glutInit(&argc, argv); // Initialize GLUT
glutCreateWindow("Simple Diamond"); // Create window with the given title
glutInitWindowSize(1000, 1000); // Set the window's initial width & height
glutInitWindowPosition(50, 50); // Position the window's initial top-left corner
initGL();
glutDisplayFunc(display); // Register callback handler for window re-paint event
 // Our own OpenGL initialization
glutMainLoop(); // Enter the event-processing loop
return 0;
}
