// C++ code
//
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    if (Serial.available() > 0)
    {
        int S = Serial.parseInt();
        Serial.print("S=");
        Serial.println(S);

        int I = Serial.parseInt();
        Serial.print("I=");
        Serial.println(I);

        int F1 = !S & I;
        Serial.print("F1=");
        Serial.println(F1);

        int F0 = S & I;
        Serial.print("F0=");
        Serial.println(F0);

        Serial.println();
    }
}
