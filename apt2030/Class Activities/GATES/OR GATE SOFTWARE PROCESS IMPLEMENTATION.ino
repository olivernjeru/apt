// C++ code
//
void setup()
{
  pinMode(2, OUTPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  Serial.begin(9600);
}

void loop()
{
  int A = digitalRead(3);
  Serial.print("A=");
  Serial.println(A);
  int B = digitalRead(4);
  Serial.print("B=");
  Serial.println(B);
  // ORGATE
  digitalWrite(2,A|B);
}
