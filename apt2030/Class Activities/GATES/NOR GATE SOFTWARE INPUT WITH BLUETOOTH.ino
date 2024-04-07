// C++ code
//
void setup()
{
  pinMode(2, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  if(Serial.available()>0) {
    int A=Serial.parseInt();
    Serial.print("A=");
    Serial.print(A);
    Serial.println();
    int B=Serial.parseInt();
    Serial.print("B=");
    Serial.print(B);
    Serial.println();
    // NORGATE
  	digitalWrite(2,!(A|B));
  }
}
