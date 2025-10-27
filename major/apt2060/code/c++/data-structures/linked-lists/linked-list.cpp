#include<iostream>
using namespace std;
struct node{
	int data;
	node *next;
};
class linkedlist{
	node *head, *tail;
	public:
		linkedlist(){
			head=tail=NULL;
		}
		void createlist(int item)
		{
			node *newnode=new node;
			newnode->data=item;
			newnode->next=NULL;
			if(head==NULL)
			{
				head=tail=newnode;
			}
			else
			{
				tail->next=newnode;
				tail=newnode;
			}
		}
		void display()
		{
			node *temp=head;
			while(temp!=NULL)
			{
				cout<<temp->data<<"  ";
				temp=temp->next;
			}
		}
		
		void insert(int item, int pos)
		{
			node *newnode=new node;
			newnode->data=item;
			newnode->next=NULL;
			
			node *current, *previous;
			current=head;
			for(int i=1; i<pos; i++)
			{
				previous=current;
				current=current->next;
			}
			if(current==head)
			{
				newnode->next=current;
				head=newnode;
			}
			else if(current==tail)
			{
				current->next=newnode;
				tail=newnode;
			}
			else
			{
				previous->next=newnode;
				newnode->next=current;
			}
		}

        void deletenode(int pos)
		{
			
			node *current, *previous;
			current=head;
			for(int i=1; i<pos; i++)
			{
				previous=current;
				current=current->next;
			}
			if(current==head)
			{
				head=current->next;
				//head=head->next;
			}
			else if(current==tail)
			{
			previous->next=NULL;
			tail=previous;
			}
			else
			{
				previous->next=current->next;
				
			}
		}
		
};

int main()
{
	linkedlist s;
	int i,n;
	int item;
	int pos;
	cout<<"how many values ";
	cin>>n;
	cout<<"enter values ";
	for(i=0; i<n; i++)
	{
		cin>>item;
		s.createlist(item);
	}
	cout<<"enter new item ";
	cin>>item;
	cout<<"enter position ";
	cin>>pos;
	s.insert(item, pos);
	cout<<"items in the linkedlist : ";
	s.display();
    s.delete(item, pos);
    cout<<"Delete Items in the Linked List: ";
    s.display();
}
