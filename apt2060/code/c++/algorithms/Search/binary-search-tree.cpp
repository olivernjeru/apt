#include<iostream>
using namespace std;
struct node{
	int data;
	node *left,*right;
};

node *insert(node *rootnode, int value)
{
	if(rootnode==NULL)
	{
		node*newnode=new node;
		newnode->data=value;
		newnode->left=NULL;
		newnode->right=NULL;
		rootnode=newnode;
		return rootnode;
	}
	else if(value<rootnode->data)
	{
		rootnode->left=insert(rootnode->left, value);
	}
	else
	{
		rootnode->right=insert(rootnode->right, value);
	}
}

void preorder(node *rootnode)
{
	if(rootnode==NULL)
	{
		return;
	}
	else{
		cout<<rootnode->data<<" ";
		preorder(rootnode->left);
		preorder(rootnode->right);
	}
}

void inorder(node * rootnode)
{
	if(rootnode==NULL)
	{
		return;
	}
	else{
		inorder(rootnode->left);
		cout<<rootnode->data<<" ";
		inorder(rootnode->right);
	}
}

void postorder(node*rootnode)
{
	if(rootnode==NULL)
	{
		return;
	}
	else{
		postorder(rootnode->left);
		postorder(rootnode->right);
		cout<<rootnode->data<<" ";
	}
}

int main()
{
	int i, n, value;
	node *rootnode=NULL;
	cout<<"how many values ";
	cin>>n;
	
	cout<<"enter values ";
	for(i=0; i<n; i++)
	{
		cin>>value;
		rootnode=insert(rootnode, value);
	}
	cout<<"\nPreorder Traversal: ";
	preorder(rootnode);
	
	cout<<"\nInorder Traversal: ";
	inorder(rootnode);
	
	cout<<"\nPostorder Traversal: ";
	postorder(rootnode);
	
}
