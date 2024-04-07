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
        int I1 = Serial.parseInt();
        Serial.print("I1=");
        Serial.println(I1);
        int I0 = Serial.parseInt();
        Serial.print("I0=");
        Serial.println(I0);
        digitalWrite(2, !S & I0 | S & I1);
        int F = !S & I0 | S & I1;
        Serial.print("F=");
        Serial.println(F);
        if (S == 0 && I0 == 1 || I0 == 0)
            Serial.println("I0 is selected!");
        else if (S == 1 && (I1 == 0 || I1 == 1))
            Serial.println("I1 is selected!");
        Serial.println();
    }
}
