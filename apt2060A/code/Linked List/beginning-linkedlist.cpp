//linked list
#include<iostream>
using namespace std;

//use a structure called node
struct node {
	int data;
	node *next;
};

//create a linkedlist class
class linkedlist {
	node *head, *tail;
	public:
		linkedlist();
		void insertvalues(int item);
		void display();
};

linkedlist::linkedlist()
{
	head=NULL;
	tail=NULL;
}

void linkedlist::insertvalues(int item)
{
	node *newnode=new node;
	newnode->data=item;
	newnode->next=NULL;
	//establish connection to the node
	if(head==NULL)
	{
		head=newnode;
		tail=newnode;
	}
	else {
		tail->next=newnode;
		tail=newnode;
	}
}

void linkedlist::display()
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
	linkedlist usiu;
	int i, n;
	int item;
	cout<<" how many values ";
	cin>>n;
	cout<<"Enter values now ";
	for(i=0; i<n; i++)
	{
		cin>>item;
		usiu.insertvalues(item);
	}
	usiu.display();
}

