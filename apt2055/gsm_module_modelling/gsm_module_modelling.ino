// C++ code
//{

#include <SoftwareSerial.h>
SoftwareSerial sim800l(10, 11); //RX TX
void setup()
{
  Serial.begin(9600);
  sim800l.begin(9600);
  Serial.println("Type your AT commands: ");
}

void loop()
{
  if(Serial.available()>0) 
  {
    sim800l.write(Serial.read());
  }
  
  if(sim800l.available()>0)
  {
    sim800l.write(sim800l.read());
  }
}

//TEST COMMANDS
//COMMAND         FUNCTION                     OUTPUT
//AT+CFUN=1,1     Restart the GSM Module.      Output should be OK
//AT+COPS=0       Automate netwok selection.   OK
//AT+CREG?        Check network.     0, 1
//AT+CSQ          Check signal strength        xx, yy xx>10