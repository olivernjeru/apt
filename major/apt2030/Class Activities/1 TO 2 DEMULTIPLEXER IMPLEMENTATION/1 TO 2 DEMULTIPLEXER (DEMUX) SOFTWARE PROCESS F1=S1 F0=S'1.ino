// C++ code
//
void setup()
{
    pinMode(2, OUTPUT);
    pinMode(3, OUTPUT);
    pinMode(4, INPUT);
    pinMode(5, INPUT);
    Serial.begin(9600);
}

void loop()
{
    int S = digitalRead(4);
    Serial.print("S=");
    Serial.println(S);
    int I = digitalRead(4);
    Serial.print("I=");
    Serial.println(I);
    digitalWrite(2, !S & I);
    digitalWrite(3, S & I);
    Serial.println();
}
