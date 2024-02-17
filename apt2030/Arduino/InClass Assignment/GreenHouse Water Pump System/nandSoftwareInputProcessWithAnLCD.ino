// C++ code
//
#include<LiquidCrystal.h>
  LiquidCrystal lcd(3,4,5,6,7,8);
void setup()
{
  pinMode(2, OUTPUT);
  Serial.begin(9600);
  lcd.begin(16,2);
}

void loop()
{
  if (Serial.available()>0) {
    int A=Serial.parseInt();
    lcd.setCursor(0,0);
    lcd.print("A=");
    lcd.setCursor(2,0);
    lcd.print(A);
    int B=Serial.parseInt();
    lcd.setCursor(4,0);
    lcd.print("B=");
    lcd.setCursor(6,0);
    lcd.print(B);
    int C=Serial.parseInt();
    lcd.setCursor(8,0);
    lcd.print("C=");
    lcd.setCursor(10,0);
    lcd.println(C);
    digitalWrite(2,!(C&!(!A&B)));
    int F=!(!(A&B)&C);
    if(F==1) {
      lcd.setCursor(0,1);
      lcd.print("Pump is on ");
    }
    else {
      lcd.setCursor(0, 1);
      lcd.print("Pump is off");
    }
  }
}
