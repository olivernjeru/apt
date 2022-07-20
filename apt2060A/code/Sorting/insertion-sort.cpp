//insertion sort
#include<iostream>
using namespace std;

int i, j, n;
int list[10];

void captureinputs()
{
	cout<<"Please enter the number of values you want to capture: ";
	cin>>n;
	cout<<"Please enter the values: ";
	for(i=0; i<n;i++)
	{
		cin>>list[i];
	}
}

void display()
{
	for(i=0; i<n; i++)
	{
		cout<<list[i]<<" ";
	}
}

void insertionsort()
{
	for(i=1; i<n; i++)
	{
		j=1;
		while(list[j]<list[j-1])
		{
			//swap(list[j], list[j-1]);
			int temp = list[j];
			list[j] = list[j-1];
			list[j-1]=temp;
			j--;
		}
	}
}

int main()
{
	captureinputs();
	insertionsort();
	display();
}