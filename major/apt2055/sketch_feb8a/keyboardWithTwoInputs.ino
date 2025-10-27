// C++ code
//
void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  Serial.begin(9600);
}

void loop()
{
  int A=digitalRead(2);
  int B=digitalRead(3);
  if (A==HIGH) {
    Serial.println("A");
  }
  if (B==HIGH) {
    Serial.println("B");
  }
  delay(100);
}

