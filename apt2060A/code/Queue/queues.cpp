//queues
#include<iostream>
#define size 40
using namespace std;

class queue{
	int rear, front;
	int list[size];
	public:
		queue();
		void enqueue(int item);
		int dequeue();
		void display();
};

queue::queue()
{
	rear=-1;
	front=-1;
}

void queue::enqueue(int item)
{
	if(rear==size-1)
	{
		cout<<"Queue Overflow";
	}
	else if (rear==-1)
	{
		rear++;
		list[rear]=item;
		front++;
	}
	else
	{
		rear++;
		list[rear]=item;
	}
}

int queue::dequeue()
{
	if(front==-1)
	{
		cout<<"Queue Underflow";
		return 0;
	}
	else if(rear==front)
	{
		int item=list[front];
		rear=front=-1;
		return item;
	}
	else
	{
		int item=list[front];
		front++;
		return item;
	}
}

void queue::display()
{
	for (int i=front; i<=rear;i++)
	{
		cout<<dequeue()<<" ";
	}
}

int main()
{
	queue q;
	int i, n, item;
	cout<<"Ënter the number of values";
	cin>>n;
	cout<<"Enter values: ";
	cin>>item;
	for (i=0;i<n;i++)
	{
		cin>>item;
	}
	q.display();
}

