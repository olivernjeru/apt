// C++ code
//
void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if(Serial.available()>0) {
    int A=Serial.parseInt();
    Serial.print("A=");
    Serial.print(A);
    int B=Serial.parseInt();
    Serial.print("B=");
    Serial.print(B);
    Serial.println();
    int F=A|B;
    Serial.print("F=");
    Serial.print(F);
    Serial.println();
  }
}
