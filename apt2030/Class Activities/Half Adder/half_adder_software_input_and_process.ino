// C++ code
//
void setup()
{
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  if (Serial.available() > 0)
  {
    int A = Serial.parseInt();
    Serial.print("A=");
    Serial.println(A);
    int B = Serial.parseInt();
    Serial.print("B=");
    Serial.println(B);
    digitalWrite(2, A ^ B); // Co
    digitalWrite(3, A & B); // S
    Serial.println();
  }
}
