#include<iostream>
using namespace std;

//linear search
int list[50]; //initialize an array called list with a size of 50
int n, i; //initialize integers n and i

void captureinputs()
{
	cout<<"Please enter the size of values you want to work with; ";
	cin>>n;
	cout<<"Please enter the values; ";
	for(i=0; i<n; i++)
	{
		cin>>list[i]; //capture the values of the array after specifying the size of the array
	}
}

void linearsearch()
{
	int key;
	cout<<"Please enter the value you are looking for: ";
	cin>>key; //enter the value you want to look for in the array
	for(i=0; i<n; i++)
	{
		if(key==list[i]) //comparing the key to the value of the array at the start of the array as it loops through the for loop
		{
			cout<<"key"<<" has been found at location "<<i; //display that it has been found if the key is equal to a value in the list
			break; //meant to stop the search if it has not been found
		}
	}
	if(i>=n) //if we are going past the size of the array and the key has not been found 
	{
		cout<<key<<" was never found.:("; //display key was never found
	}
}
	
void binarysearch()
{
	int key;
	cout<<"Please enter the value you are looking for: "; 
	cin>>key; // capture the value you want to search for in the array
	int low = 0; //initializing low to be zero, the start of the array
	int high = n-1; //initializing high to be n-1, the highest value in the array
	int mid; //creating variable mid
	for(i=0; i<n;i++)
	{
		mid=(low+high)/2; //defining what mid equals to
		if(key==list[mid]) //comparing the keyvalue to the values in the array
		{
			cout<<key<<" was found at location "<<mid; //display the key value and the index it was found in if found
			break; //break if found or not
		}
		else if(key<list[mid]) //if not found and if key is less than the value at the mid point, change the high point to high point minus one
		{
			high=high-1;
		}
		else
		{
			low=low+1; //if not found and if key is more than the value at the mid point, change the low point to low point plus one
		}
	}
	if(low>high)
	{
		cout<<key<<" was never found."; //printed if not found at all
	}
}

int main()
{
	captureinputs();
	//linearsearch();
	binarysearch();
}
