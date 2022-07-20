#include <iostream>
using namespace std;
#define size 7
class stack 
{
    int top;

    string arr[size];

    public: stack(); //constructor
    public: void push(string item);
    public: string pop();
    public: string peek();
    public: void display();

};

stack::stack()
{
    top = -1; 
}

void stack::push(string item)
{
    if (top == size-1)
    {
        cout << "Stackoverflow";
        return;
    }
    else
    {
        top= top+1;
        arr[top]= item ;
    }
}

string stack::pop()
{
    if (top == -1)
    {
        cout << "stackunderflow";
        return 0;
    }
    else
    {
        string item = arr[top];
        top--;
        return item;
    }
}

string stack::peek()
{
    if (top == -1)
    {
        cout << "stackunderflow";
        return 0;
    }
    else
    {
        string item = arr[top];
        return item;
    }
}

void stack::display()
{
    while (top != -1)
    {
        cout << pop() << " ";
    }
}

int main()
{
    stack s;
    int len, i;
    string name;
    cout << "Please enter the number of students in your class: ";
    cin >> len;
    cout << "enter names: \n";
    for (i = 0; i < len; i++) {
        cin >> name;
        s.push(name);
    }
    
    cout << "\nThe name at the top of the stack is: " << s.peek();
    cout << "\nThe names of the students are: ";
    s.display();

}
