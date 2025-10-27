#include<iostream>
using namespace std;

//binary search
int list[50];
int n, i;

void captureinputs()
{
	cout<<"Please enter the size of values you want to work with; ";
	cin>>n;
	cout<<"Please enter the values; ";
	for(i=0; i<n; i++)
	{
		cin>>list[i];
	}
}

void binarysearch()
{
	int key;
	cout<<"Please enter the value you are looking for: ";
	cin>>key;
	int low = 0;
	int high = n-1;
	int mid;
	for(i=0; i<n;i++)
	{
		mid=(low+high)/2;
		if(key==list[mid])
		{
			cout<<key<<" was found at location "<<mid;
			break;
		}
		else if(key<list[mid])
		{
			high=high-1;
		}
		else
		{
			low=low+1;
		}
	}
	if(low>high)
	{
		cout<<key<<" was never found.";
	}
}

int main()
{
	captureinputs();
	binarysearch();
}
