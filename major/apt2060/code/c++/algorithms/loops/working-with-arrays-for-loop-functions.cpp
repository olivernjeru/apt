#include<iostream>
using namespace std;

// working with arrays, for loops and functions
	int list[50]; // declare the array with a size of 50
	int n, i; // initialize variables n and i as int
	int pos; // initialize variable pos as int
	
void capturevalues()
{
	cout<<"How many values do you want to work with? ";
	cin>>n; // capturing the size of the number of values the user wants to work with, obviously 50 or less
	cout<<"Enter values: ";
	for (i=0; i<n; i++) // i<n, say n is 5, i will start as 0, go to 1, 2, 3 and finally after 4, it will stop
	{
		cin>>list[i]; // say n is still 5, we will capture 5 inputs in the list
	}
}

void insertion()
{
	//inserting a value in between an array
	cout<<"Enter the position you wanna insert your value in: ";
	cin>>pos;
	//shift values o insert a new value
	for(i=n-1; i>=pos; i--)
	{
		list[i+1]=list[i]; //shifting the new value from say n is 5, from 6 to 5 and so on until it reaches the value of pos
	}
	cout<<"Enter new value: ";
	cin>>list[pos]; //enter the new value at the position in the array thereby icnreasing the size of the array from say n is 5 to 6 with new value being at the position of pos in the array
	n++; //increasing the size of the array to accomodate the new value, ask why we are increasing in the first place, doesn't it autoincrease?
	cout<<"\nThe size of the array now is "<<n;
	cout<<"\nAll values are "; //display the values
	for (i=0; i<n; i++)
	{
		cout<<list[i]<<"\t"; //display the values of the array in a loop after insertion to display all of them
	}
}

void deletion()
{
	//deleting a value
	cout<<"\nEnter the position you want to delete: ";
	cin>>pos;
	//shift values to delete an existing value
	for(i=pos; i<n; i++)
	{
		list[i]=list[i+1]; //shifting a value from its current position to the right side of the array as the loop runs
	}
	n--; //decrease the size of the array since we have shifted an existing value to the right side of the array hence out of it?
	cout<<"\nThe size of the array now is "<<n;
	cout<<"\nRemaining values are ";
	for (i=0; i<n; i++)
	{
		cout<<list[i]<<"\t"; //display all the remaining values in the array using a loop to get all of them after the deletion
	}
}

int main()
{
	capturevalues(); // call capturevalues function
	insertion(); // call insertion function
	deletion(); // call deletion function
}
