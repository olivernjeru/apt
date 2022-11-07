#include<iostream>
using namespace std;

//create a class called test that will have three variables, a, b and sum
class test{
	public:
	int a, b,sum;
};

int main()
{
	//create a pointer p
	test obj, *p;
	//instantiate it to be equal to an object
	p=&obj;
	cout<<"Enter two values ";
	//capture value of a
	cin>>p->a;
	//capture value of b
	cin>>p->b;
	
	//calculate sum
	p->sum=p->a+p->b;
	
	//display sum
	cout<<p->sum;
}
