// C++ code
//{

#include <SoftwareSerial.h>
SoftwareSerial sim800l(10, 11); //RX TX
void setup()
{
  Serial.begin(9600);
  sim800l.begin(9600);
  Serial.println("Buzzer Manipulation: ");
  sim800l.println("AT+CMGF=1 "); //Set SMS to Text Mode
  sim800l.println("AT+CNMI=2, 2, 0, 0, 0 "); //Enable Live SMS Reception
  pinMode(3, OUTPUT);
  noTone(3);
  delay(100);
}

void loop() {
  if (sim800l.available() > 0) {
    String message = sim800l.readString();
    message.trim();

    if (message.indexOf("ON") > -1) {
      Serial.println("Buzzer is on!");
      tone(3, 400);
      message = "";
    } else if (message.indexOf("OFF") > -1) {
      Serial.println("Buzzer is off!");
      noTone(3);
      message = "";
    }
  }
}

//TEST COMMANDS
//COMMAND         FUNCTION                     OUTPUT
//AT+CFUN=1,1     Restart the GSM Module.      Output should be OK
//AT+COPS=0       Automate netwok selection.   OK
//AT+CREG?        Check network.     0, 1
//AT+CSQ          Check signal strength        xx, yy xx>10