#include <iostream>
using namespace std;
int i, j, pos=0, len;
int arr[10];

void getvalues(){
 cout << "Please enter the number of values you want to work with: ";
 cin >> len;
 cout << "Enter values:"<< endl;
 for (int i = 0; i<len; i++)
 {
  cin >> arr[i];
 }
}

void linearSearch(){
 int key;
 cout<< "Please enter the value you want to search for: ";
 cin>>key;
 for (i=0; i<len; i++){
  if (key==arr[i]){
   cout<< "The value was found at location "<< i<<endl;
   pos = i;
   break;
  }
 }
 if (i>=len){
  cout<< "The value was not found."<<endl;
 }
	
 //shift values
 for (int j = len-1 ; j>=pos; j--)
 {
  arr [j+1]= arr [j];
 }
	
    cout << "Please enter the new number that will go at position "<< pos<<": ";
    cin>> arr[i];
    len++;
    cout<< "The updated list of values is: ";
    for (int i = 0; i<len; i++)
 {
  cout<< arr[i] <<" ";
 }
 cout<<endl;
}

void insertionSort() 
{
 for (i=1; i < len; i++)
 {
  j = i;
  while (arr[j] < arr[j - 1]) {
    swap(arr[j], arr[j - 1]);
    j--;
   }
 }
 cout<<"The sorted list of values is: ";
}

void display(){
 for (i=0; i<len; i++){
  cout<< arr[i]<< " ";
 }
 cout<<endl;
}

int main(){
 getvalues();
 linearSearch();
 insertionSort();
 display();
}
