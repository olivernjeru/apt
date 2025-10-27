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
        int S = Serial.parseInt();
        Serial.print("S=");
        Serial.println(S);
        int I = Serial.parseInt();
        Serial.print("I=");
        Serial.println(I);
        digitalWrite(2, !S & I);
        digitalWrite(3, S & I);
        Serial.println();
    }
}
