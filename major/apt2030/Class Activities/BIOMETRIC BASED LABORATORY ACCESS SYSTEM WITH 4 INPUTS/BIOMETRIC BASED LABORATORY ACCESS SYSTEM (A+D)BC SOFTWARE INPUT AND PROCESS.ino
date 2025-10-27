// C++ code
//
void setup()
{
    pinMode(2, OUTPUT);

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
        int C = Serial.parseInt();
        Serial.print("C=");
        Serial.println(C);
        int D = Serial.parseInt();
        Serial.print("D=");
        Serial.println(D);
        digitalWrite(2, (A | D) & B & C);
        Serial.println();
    }
}
