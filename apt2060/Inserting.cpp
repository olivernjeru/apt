#include <iostream>
using namespace std;
int lcount = 0, rcount = 0;

struct node
{
	int data;
	node *left, *right;
};

node *insert(node *rootnode, int value)
{
	if (rootnode==NULL)
	{
		node *newnode = new node;
		newnode->data = value;
		newnode->left = newnode->right = NULL;
		rootnode = newnode;
		return rootnode;
	}
	
	else if (value<rootnode->data)
	{
		rootnode->left = insert(rootnode->left, value);
	}
	
	else 
	{
		rootnode->right = insert(rootnode->right, value);
	}
}

node *search(node *rootnode, int value)
{
	
	if (value==rootnode->data)
	{
		cout<<"The value was found!";
	}
	
	else if (value<=rootnode->data)
	{
		rootnode->left = search(rootnode->left, value);
		lcount++;
	}
	
	else 
	{
		rootnode->right = search(rootnode->right, value);
		rcount++;
	}
}

int main (){
	node *rootnode = NULL;
	int list[19] ={45,7,1,89,34,23,12,78,22,56,35,67,4,9,64,21,20,90,58};
	cout<<"The values are: ";
	for(int i=0; i<19; i++)
	{
		cout<<list[i]<<" ";
	}
	
	for (int i= 0; i<19; i++)
	{
		rootnode = insert(rootnode, list[i]);
	}
	
	cout << "\nThe value being searched for is 21"<<endl;
	search(rootnode, 21);
	cout<<endl;
	cout<<"The No of shifts made from the left are: "<<lcount<< endl<< "The No of shifts made from the right are: "<< rcount; 
}

