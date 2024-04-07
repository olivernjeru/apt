// C++ code
//
void setup()
{
    pinMode(2, OUTPUT);
    pinMode(3, INPUT);
    pinMode(4, INPUT);
    pinMode(5, INPUT);
    Serial.begin(9600);
}

void loop()
{
    int S = digitalRead(3);
    Serial.print("S=");
    Serial.println(S);
    int I1 = digitalRead(4);
    Serial.print("I1=");
    Serial.println(I1);
    int I0 = digitalRead(5);
    Serial.print("I0=");
    Serial.println(I0);
    digitalWrite(2, !S & I0 | S & I1);
    Serial.println();
}
