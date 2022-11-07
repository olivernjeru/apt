#include<iostream>
#define size 60
//stack structure //goes last in first out
using namespace std;

class stack{//creating stack structure to hold arrays
	int top;
	int list[size];
	public:
stack();
void push(int item);//insert item
int pop();//remove
int peek();//see
void display();//display
};

stack::stack()
{
	top=-1;
}

void stack::push(int item)
{
	if(top==size)
	{
		cout<<" stack overflow ";//if full
		return;
	}
	else
	{
		top=top+1;
		list[top]=item;
	}
}

int stack::pop()//removing
{
	if(top==-1)
	{
		cout<<" stack underflow ";
		return 0;
	}
	else
	{
		int item=list[top];
		top--;
		return item;
	}
}

int stack::peek()//trying to see what is there
{
	if(top==-1)
	{
		cout<<" stack underflow ";
	}
	else
	{
		int item=list[top];
		top--;
		return item;
	}
}

void stack::display()
{
	while(top!=-1)
	{
		cout<<pop()<<" ";
		//cout<<list[top]<<" "
		//top--
	}
}

int main()
{
	stack s;
	int i, n;
	int item;
	cout<<" how many values ";
	cin>>n;
	cout<<" enter values";
	for(i=0; i<n; i++)
	{
		cin>>item;
		s.push(item);
	}
	cout<<" item at the top is "<<s.peek();
	
	cout<<" \n items are ";
	s.display();
}
