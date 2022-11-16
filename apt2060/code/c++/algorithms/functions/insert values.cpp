#include<iostream>
using namespace std;

int main() {
	//inserting a value in between an array
	int list[50];
	int n, i;
	cout<<"How many values do you want to work with?";
	cin>>n;
	cout<<"Enter values now: ";
	for (i=0; i<n; i++)
	{
		cin>>list[i];
	}
	int pos;
	/*cout<<"Enter the position you wanna insert your value in: ";
	cin>>pos;
	//shift values
	for(i=n-1; i>=pos; i--)
	{
		list[i+1]=list[i];
	}
	cout<<"Enter new value: ";
	cin>>list[pos];
	n++;
	cout<<"All values are "<<endl;
	for (i=0; i<n; i++)
	{
		cout<<list[i]<<"\t";
	}*/
	
	//deleting a value
	cout<<"Enter the position you want to delete: ";
	cin>>pos;
	//shift values
	for(i=pos; i<n; i++)
	{
		list[i]=list[i+1];
	}
	n--;
	cout<<"Remaining values are "<<endl;
	for (i=0; i<n; i++)
	{
		cout<<list[i]<<"\t";
	}
}
