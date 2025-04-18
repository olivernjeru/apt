#include <windows.h> // for MS Windows
#include "glut.h" // GLUT, include glu.h and gl.h
// Global variable
GLfloat angle = 0.0f; // Current rotational angle of the shapes
/* Initialize OpenGL Graphics */

void initGL() {
// Set "clearing" or background color
glClearColor(0.0f, 0.0f, 0.0f, 1.0f); // Black and opaque
}
/* Called back when there is no other event to be handled */
void idle() {
glutPostRedisplay(); // Post a re-paint request to activate display()
}
/* Handler for window-repaint event. Call back when the window first appears and
whenever the window needs to be re-painted. */
void display() {
glClear(GL_COLOR_BUFFER_BIT); // Clear the color buffer
glMatrixMode(GL_MODELVIEW); // To operate on Model-View matrix
glLoadIdentity(); // Reset the model-view matrix
glPushMatrix(); // Save model-view matrix setting
glTranslatef(-0.5f, 0.4f, 0.0f); // Translate
glRotatef(angle, 0.0f, 0.0f, 1.0f); // rotate by angle in degrees
glBegin(GL_QUADS); // Each set of 4 vertices form a quad
glColor3f(1.0f, 0.0f, 0.0f); // Red
glVertex2f(-0.3f, -0.3f);
glVertex2f( 0.3f, -0.3f);
glVertex2f( 0.3f, 0.3f);
glVertex2f(-0.3f, 0.3f);
glEnd();
glPopMatrix(); // Restore the model-view matrix
glPushMatrix(); // Save model-view matrix setting
glTranslatef(-0.4f, -0.3f, 0.0f); // Translate
glRotatef(angle, 0.0f, 0.0f, 1.0f); // rotate by angle in degrees
glBegin(GL_QUADS);
glColor3f(0.0f, 1.0f, 0.0f); // Green
glVertex2f(-0.3f, -0.3f);
glVertex2f( 0.3f, -0.3f);
glVertex2f( 0.3f, 0.3f);
glVertex2f(-0.3f, 0.3f);
glEnd();
glPopMatrix(); // Restore the model-view matrix
glutSwapBuffers(); // Double buffered - swap the front and back buffers
// Change the rotational angle after each display()
angle += 0.2f;
}
int main(int argc, char** argv) {
glutInit(&argc, argv); // Initialize GLUT
glutInitDisplayMode(GLUT_DOUBLE); // Enable double buffered mode
glutInitWindowSize(640, 480); // Set the window's initial width & height - non-square
glutInitWindowPosition(50, 50); // Position the window's initial top-left corner
glutCreateWindow("Animation via Idle Function"); // Create window with the given title
glutDisplayFunc(display); // Register callback handler for window re-paint event

glutIdleFunc(idle); // Register callback handler if no other event
initGL(); // Our own OpenGL initialization
glutMainLoop(); // Enter the infinite event-processing loop
return 0;
}
