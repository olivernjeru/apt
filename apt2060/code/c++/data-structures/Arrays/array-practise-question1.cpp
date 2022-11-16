#include<iostream>
using namespace std;

//find the largest element in a sorted array
int main()
{
	int arr1[50];
	int n;
	cout<<"Please enter the number of values you want to enter: ";
	cin>>n;
	int i;
	cout<<"Please enter "<<n<<" values in a sorted manner	: ";
	for (i=0; i<n; i++)
	{
		cin>>arr1[i];
	}
	
	//find the largest element
	int j, la;
	for(i=0;i<n;i++)
	{
		la=0;
		if(arr1[i]>la)
		{
			la=arr1[i];
		}
	}
	cout<<la<<" is the largest element.";
}
