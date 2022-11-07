#include<iostream>
using namespace std;

struct node{
	int data;
	node *next;
};

class stack{
	node *head;
	public:
		stack();
		void push(int item);
		void display();
};

stack::stack()
{
	head=NULL;
}

void stack::push(int item)
{
	node *newnode=new node;
	newnode->data=item;
	newnode->next=NULL;
	
	if(head==NULL)
	{
		head=newnode;
	}
	else
	{
		newnode->next=head;
		head=newnode;
	}
}

void stack::display()
{
	node *temp;
	temp=head;
	while(temp!=NULL)
	{
		cout<<temp->data<<" ";
		temp=temp->next;
	}
}

int main()
{
	stack s;
	int i, n;
	int item;
	cout<<"how many values ";
	cin>>n;
	cout<<"enter values ";
	for (i=0; i<n; i++)
	{
		cin>>item;
		s.push(item);
	}
	s.display();
}
