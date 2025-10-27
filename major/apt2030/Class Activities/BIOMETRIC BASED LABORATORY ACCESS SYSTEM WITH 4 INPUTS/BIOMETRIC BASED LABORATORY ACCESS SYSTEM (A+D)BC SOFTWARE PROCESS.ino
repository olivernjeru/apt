// C++ code
//
void setup()
{
  pinMode(2, OUTPUT);
  for(int i=3;i<=6;i++) {
    pinMode(i, INPUT);
  }
    Serial.begin(9600);
}

void loop()
{
  int A=digitalRead(3);
  Serial.print("A=");
  Serial.println(A);
  int B=digitalRead(4);
  Serial.print("B=");
  Serial.println(B);
  int C=digitalRead(5);
  Serial.print("C=");
  Serial.println(C);
  int D=digitalRead(6);
  Serial.println("D=");
  Serial.println(D);
  digitalWrite(2,(A|D)&B&C);
  Serial.println();
}
