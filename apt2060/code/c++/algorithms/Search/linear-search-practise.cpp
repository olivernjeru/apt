#include<iostream>
using namespace std;

//linear search has O(n) time complexity
int main() //main function
{
	int arr[]= {5, 10, 2, 8, 7, 69}; //create an array of size 6 with the elements 5, 10, 2, 8, 7, 69
	int i, key; //create variable i to be used in the loop for display the array list and searching for the key value and create variable key to ask for the user as input of the element they want to search in the list of values.
	int len = sizeof(arr)/sizeof(arr[0]); // gets the size of the array using sizeof() operator and divide it by the size of each element (in bytes) and store it in a variable len
	cout<<"Please enter the element you want to search the location for from this list: "; // as for key from the user
	for(i=0; i<len; i++) //loop trhough the elements of the array
	{
		cout<<arr[i]<<" "; //display the array
	}
	cin>>key; //capture key as input
	for(i=0; i<len; i++) //linear search for key
	{
		if(key==arr[i]) //check if key s equal to the curret element of the array
		{
			cout<<key<<" was found at position "<<i; //key found display message
			break; //to break the control from the loop
		}
	}
	if(i==len) // if the index i moves over until more than the last index and still hasn't found key
	{
		cout<<key<<" was never found."; //then display that key was never found
	}
}
