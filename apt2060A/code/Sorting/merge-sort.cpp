//merge-sort
#include <iostream>
#define size 45
using namespace std;

int i, j, n;
int array[size];
void getvalues()
{
	cout<<"how many values ";
	cin>>n;
	cout<<"enter values ";
	for(i=0; i<n; i++)
	{
		cin>>array[i];
	}
}

void display()
{
	for(i=0; i<n; i++)
	cout<<array[i]<<" ";
}

void merge(int array[], int lo, int mid, int hi)
{
	int temparray[n]; //n==r-l+1
	i=lo;
	j=mid+1;
	int k=0;
	
	while(i<=mid&& j<=hi)
	{
		if(array[i]<=array[j])
		{
			temparray[k]=array[i];
			i++;
			k++;
		}
		else
		{
			temparray[k]=array[j];
			j++;
			k++;
		}
	}

	while(i<=mid)
	{
		temparray[k]=array[i];
		i++;
		k++;
	}

	while(j<=hi)
	{
		temparray[k]=array[j];
		j++;
		k++;
	}

	for(i=0; i<k; i++)
	{
		array[i+lo]=temparray[i];
	}
}

	void mergesort(int array[], int lo, int hi)
	{
		if(lo<hi)
		{
			int mid=(lo+hi)/2;
			mergesort(array, lo, mid);
			mergesort(array, mid+1, hi);

			merge(array, lo, mid, hi);
		}
	}

	int main()
	{
		getvalues();
		mergesort(array, 0, n-1);
		display();
	}





