#include<iostream>
using namespace std;

double x, y, sum, difference, product, division, perim;
//basic calculator

void captureinputs()
{
	cout<<"This is a basic calculator that will capture the inputs of x and y then calculate their sum, difference (x-y), product, division (x/y), area, perimeter and display the results.";
	cout<<"\n=================================================================================================================================================================";
	cout<<"\nPlease enter the value of x: ";
	cin>>x;
	cout<<"\nPlease enter the value of y: ";
	cin>>y;
}

void add()
{
	sum = x + y;
	cout<<"\nThe sum of "<<x<<" and "<<y<<" is "<<sum;
}

void subtract()
{
	difference = x - y;
	cout<<"\nThe difference, "<<x<<" - "<<y<<" is "<<difference;
}

void multiply()
{
	product = x * y;
	cout<<"\nThe product of, "<<x<<" * "<<y<<" is "<<product;
}

void divide()
{
	division = x / y;
	cout<<"\nThe division, "<<x<<" / "<<y<<" is "<<division;
}

void perimeter()
{
	perim = 2 * sum;
	cout<<"\nThe perimeter is "<<perim;
}

int main ()
{
	captureinputs();
	add();
	subtract();
	multiply();
	divide();
	perimeter();
}

