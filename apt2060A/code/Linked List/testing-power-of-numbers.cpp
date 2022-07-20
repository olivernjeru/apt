#include <iostream>
using namespace std;
int power(int x, int n)
{
	if(n<=0)
	{
		return 1;
	}
	else
	{
		return x*power(x,n-1);
	}
}

int main()
{
	int x, n;
	cout<<"enter a number ";
	cin>>x;
	cout<<"enter power ";
	cin>>n;
	
	cout<<x<<" power of "<<n<<" is "<<power(x,n);
	
}
