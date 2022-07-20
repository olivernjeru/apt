#include<iostream>
using namespace std;

int low, high, mid, n, i, key;
int list[7];

//binary search with while loop
int captureinputs()
{
	cout<<"Please enter the size of the array: ";
	cin>>n;
	for(i=0;i<n;i++)
	{
		cin>>list[i];
	}
	cout<<"Please enter the value you wanna search for: ";
	cin>>key;
}

int binarysearchwithwhileloop()
{
	low = 0;
	high = n-1;
	mid = (low+high)/2;
	while(low<high)
	{
		if(key==mid)
		{
			cout<<key<<" was found";
		}
		else if(key>mid)
		{
			low=mid+1;
		}
		else
		{
			high=mid-1;
		}
		low++;
	}	
}

int main()
{
	captureinputs();
	binarysearchwithwhileloop();
}
