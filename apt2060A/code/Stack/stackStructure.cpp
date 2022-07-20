//stackStructure
#include<iostream>
#define size 3
using namespace std;

class stack{
	int top; //pointer
	int list[size];
	public:
stack();
void push(int item);
int pop();
int peek();
void display();
};

stack::stack() //constructor
{
	top=-1;
}

void stack::push(int item)
{
	if (top==size-1)
	{
		cout<<"stack overflow\n ";
		return;
	}
	else
	{
		top=top+1;
		list[top]=item;
	}
}

int stack::pop()
{
	if(top==-1)
	{
		cout<<"\nstack underflow\n";
		return 0;
	}
	else
	{
		int item=list[top];
		top--;
		return item;
	}
}

int stack::peek()
{
	if(top==-1)
	{
		cout<<"\nstack underflow\n";
	}
	else
	{
		int item=list[top];
		return item;
	}
}

void stack::display()
{
	while(top!=-1)
	{
		cout<<pop()<<" ";
	}
}

int main()
{
	stack s;
	int i, n;
	int x;
	int item;
	cout<<" how many values ";
	cin>>n;
	cout<<"enter values ";
	for(i=0; i<n;i++)
	{
		cin>>item;
		s.push(item);
	}
	
	cout<<" item at the top is "<<s.peek();
	
	cout<<" items are "<<"\n";
	s.display();
}


