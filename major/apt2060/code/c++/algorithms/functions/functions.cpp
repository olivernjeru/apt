#include<iostream>
using namespace std;

int a,b,sum;

void getvalues() {
	cout<<"enter two numbers: ";
	cin>>a>>b;
}

void compute() {
	sum = a +b;
}

void display() {
	cout<<a<<" + "<<b<<" = "<<sum;
}

int main() {
	getvalues();
	compute();
	display();
}
