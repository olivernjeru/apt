#include<iostream>
using namespace std;

//binary search has O(Log n) time complexity
int main()
{
	int arr[] = {1, 10, 19, 26, 39, 69, 74, 96, 105, 150, 201}; //create the array
	int i;
	int low = 0;
	int len = sizeof(arr)/sizeof(arr[0]);
	int high = len - 1;
	int mid;
	int key;
	
	cout<<"Please enter the value you want to search for among these: "; //ask for user input via this message
	for(i = 0; i < len; i++)
	{
		cout<<arr[i]<<" "; //show the elements in the array
	}
	cin>>key; //get the value of key
	
	//binary search algorithm
	for(i = 0; i < len; i++)
	{
		mid = (low+high)/2;
		if(key == arr[mid])
		{
			cout<<key<<" was found at position "<<mid; //display that the key value was found
			break; //break
		}
		else if(key < arr[mid]) //compare if key is less than the middle value
		{
			high = mid - 1; //if so, shift teh value of high to be mid - 1
		}
		else
		{
			low = mid + 1; //shift the value of low to be mid + 1
		}
	}
	if(low>high)
	{
		cout<<key<<" was never found.";
	}
}
