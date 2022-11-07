#include<iostream>
using namespace std;

int main() {
	int i = 1;
	while(i<=10) //condition
	{
		cout<<i<<"\t"; 
		i++; //increament by 1. If this wasnn't here, it would be an infinite loop that is not good especially for the computer resources
	} //The output will be 1 2 3 4 5 6 7 8 9 10
}
