#include<iostream>
using namespace std;

int main() {
	int i = 15; //declare variable i and assign value 15 to it
	do //start of loop
	 {
		cout<<i<<"\t";
		i--; //decreament of the value i. Also makes the loop not be infinite thereby not crashing your program or freezing your computer
	}  //output is 15 14 13 12 11 10
	while(i>=10); // condition is tested at the end of the loop
}
