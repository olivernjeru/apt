void setup()
{
    pinMode(2, OUTPUT);
    Serial.begin(9600);
}

void loop()
{ /*
   if(Serial.available()>0) {
   int A=Serial.parseInt();
   Serial.print("A=");
   Serial.println(A);
   int B=Serial.parseInt();
   Serial.print("B=");
   Serial.println(B);
   int C=Serial.parseInt();
   Serial.print("C=");
   Serial.println(C);
   int D=Serial.parseInt();
   Serial.print("D=");
   Serial.println(D);
   digitalWrite(2,A|C);
   Serial.println();
   } */

    for (int i = 0; i <= 11; i++)
    {
        Serial.print("i=");
        Serial.println(i);
        if (i == 0 || i == 1 || i == 4 || i == 5)
        {
            noTone(2);
        }
        else
        {
            tone(2, 500);
        }
        delay(1000);
    }
}
