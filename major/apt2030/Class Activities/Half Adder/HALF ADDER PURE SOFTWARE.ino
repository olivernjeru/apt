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
        int Co = A & B;
        Serial.print("Co=");
        Serial.println(Co);
        int S = A ^ B;
        Serial.print("S=");
        Serial.println(S);
        Serial.println();
    }
}
