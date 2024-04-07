// C++ code
//
void setup()
{
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  Serial.begin(9600);
}

void loop()
{
  int A = digitalRead(4);
  Serial.print("A=");
  Serial.println(A);
  int B = digitalRead(5);
  Serial.print("B=");
  Serial.println(B);
  digitalWrite(2, A ^ B); // Co
  digitalWrite(3, A & B); // S
  Serial.println();
}
