#include <LiquidCrystal.h>
LiquidCrystal lcd(6, 7, 8, 9, 10, 11);
void setup()
{
    pinMode(4, INPUT);
    pinMode(5, INPUT);
    lcd.begin(16, 2);
}

void loop()
{
    int A = digitalRead(4);
    lcd.setCursor(0, 0);
    lcd.print("A=");
    lcd.setCursor(2, 0);
    lcd.print(A);
    int B = digitalRead(5);
    lcd.setCursor(5, 0);
    lcd.print("B=");
    lcd.setCursor(7, 0);
    lcd.print(B);
    int Co = A & B; // Co
    lcd.setCursor(0, 1);
    lcd.print("Co=");
    lcd.setCursor(3, 1);
    lcd.print(Co);
    int S = A ^ B; // S
    lcd.setCursor(5, 1);
    lcd.print("S=");
    lcd.setCursor(7, 1);
    lcd.print(S);
    if (Co == 0 && S == 0)
    {
        lcd.setCursor(10, 1);
        lcd.print("0");
    }
    else if (Co == 1 && S == 0)
    {
        lcd.setCursor(10, 1);
        lcd.print("2");
    }
    else
    {
        lcd.setCursor(10, 1);
        lcd.print("1");
    }
}
