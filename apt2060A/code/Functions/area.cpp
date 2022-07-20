#include<iostream>
#include<cmath>
using namespace std;

int pi=3.14;
int r;
double areaofcylinder;


void input() {
	cin>>r;
}

void area(){
	areaofcylinder = pi * (pow(r,2));
	cout<<areaofcylinder;
}

int main() {
	input();
	area();
}
