#include <iostream>
#define size 50
using namespace std;

int i, j, n;
int array[size];
void getvalues()
{
	cout<<"how many values? ";
	cin>>n;
	cout<<"enter values: ";
	for(i=0; i<n; i++)
	{
		cin>>array[i];
	}
}

void display()
{
	for(i=0; i<n; i++)
	{
		cout<<array[i]<<" ";
	}
}

int partition(int array[], int lo, int hi)
{
	int pivot=array[lo];
	i=lo;
	j=hi;
	
	while(i<j)
	{
		do{
			i++;
		}
		while(array[i]<=pivot);
		
		do{
			j--;
		} 
		while(array[j]>pivot);
		
		if(i<j)
			swap(array[i], array[j]); 
	}
	swap(array[lo], array[j]);//swap pivot value with element at pivot index
	return j;
}

void quicksort(int array[], int lo, int hi)
{
	if(lo<hi)
	{
		int pindex=partition(array, lo, hi);
		quicksort(array, lo, pindex);
		quicksort(array, pindex+1, hi);
	}
}

int main()
{
	getvalues();
	quicksort(array, 0, n);
	display();
}
