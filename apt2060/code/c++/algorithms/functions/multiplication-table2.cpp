#include<iostream>
using namespace std;

//Multiplication table
int main()
{
	int x, i;
	for(x = 1; x < 11; x++)
	{
		for(i = 1; i < 11; i++)
		{
			cout<<x<<" x "<<i<<" = "<<x * i<<"\t";
		}
		cout<<"\n";
	}
}
