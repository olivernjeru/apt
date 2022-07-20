#include <iostream>
using namespace std;
#define size 7
class queue{
 int rear, front;
 string arr[size];
 public:
  queue();
  void enqueue(string item);
        string dequeue();
        string peek();
        void display(); 
};
 
queue::queue(){
     rear = -1;
     front = -1;
 }
	
void queue::enqueue(string item)
{
 if (rear==size-1)
 {
  cout<<"Queue overflow";
  return;
 }
	
 else if (rear == -1)
 {
  rear++;
  arr[rear]= item;
  front++;
 }
 else
 {
  rear++;
  arr[rear]=item;
 }
}

string queue::dequeue()
{
 if (front==-1)
 {
  cout<<"queueunderflow";
  return 0;
 }
 else if (rear==front)
 {
  string item = arr[front];
  rear = front = -1;
  return item;
 }
 else
 {
  string item = arr[front];
  front++;
  return item;
 }  
}
string queue::peek()
{
 if (front==-1)
 {
  cout<<"queueunderflow";
  return 0;
 }
 else
 {
  string item = arr[front];
  return item;
 }
   
}

void queue::display()
{
 for (int i = front; i<=rear; i++){
  cout<<dequeue()<<" ";
 }
}

int main(){
 queue q;
 int len, i;
 string name;
 cout<<"Please enter the number of students in your class: ";
 cin>> len;
 cout<<"Please enter the student(s) name(s): \n";
 for (i=0; i<len; i++){
  cin>>name;
  q.enqueue(name);
 }	
 cout<<"\nThe name at the front of the queue is: "<<q.peek();
 cout<<endl;
 cout<<"\nThe list of students is: ";
 q.display();	
}


