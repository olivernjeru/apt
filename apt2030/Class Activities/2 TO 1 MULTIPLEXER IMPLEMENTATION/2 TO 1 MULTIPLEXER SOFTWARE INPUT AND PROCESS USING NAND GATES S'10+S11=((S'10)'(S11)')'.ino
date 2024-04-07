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
        int S = Serial.parseInt();
        Serial.print("S=");
        Serial.println(S);
        int I1 = Serial.parseInt();
        Serial.print("I1=");
        Serial.println(I1);
        int I0 = Serial.parseInt();
        Serial.print("I0=");
        Serial.println(I0);
        digitalWrite(2, !S & I0 | S & I1);
        Serial.println();
    }
}
