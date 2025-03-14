// C++ code
//
void setup()
{
    pinMode(2, OUTPUT);
    pinMode(3, OUTPUT);
    pinMode(4, INPUT);
    pinMode(5, INPUT);
    pinMode(6, INPUT);
    Serial.begin(9600);
    delay(6000);
}

void loop()
{
    int A = digitalRead(4);
    Serial.print("A= ");
    Serial.println(A);
    int B = digitalRead(5);
    Serial.print("B= ");
    Serial.println(B);
    int C = digitalRead(6);
    Serial.print("C= ");
    Serial.println(C);

    int S = (A ^ B ^ C);
    Serial.print("S= ");
    Serial.println(S);
    digitalWrite(2, S);
    int Co = (A & B) ^ (B & C) ^ (A & C);
    Serial.print("Co= ");
    Serial.println(Co);
    digitalWrite(3, Co);
}
