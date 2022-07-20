#include<iostream>
using namespace std;

//multiplication table
int main()
{
	int x;
	int i;
	for (x = 1; x < 11; x++){
		for(i = 1; i < 11; i++){
			cout<<x<<" x "<<i<<" = "<<x * i<<"\t";
		}
		cout<<"\n";
	}
}
