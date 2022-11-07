#include <iostream>
using namespace std;
int factorial(int n)
{
	if(n<=1)
	{
		return 1;
	}
	else
	{
		return n*factorial(n-1);
	}
}

int main()
{
	int n;
	cout<<"enter a positive number ";
	cin>>n;
	cout<<n<<" factorial is "<<factorial(n);
}
