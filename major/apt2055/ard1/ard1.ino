// C++ code
//
void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if(Serial.available() > 0) {
    // int nums = Serial.parseInt();
    // Serial.print("Numerical Data = ");
    // Serial.println(nums);
    // if (nums == 1) {
    //   tone(13, 10000);
    // } else if (nums == 0) {
    //   noTone(13);
    // }
    
    char A = Serial.read();
    // Serial.print("Character Data = ");
    Serial.println(A);
    
    // String text = Serial.readString();
    // Serial.print("Text Data = ");
    // Serial.println(text);
    // if(text == "on") {
    //   tone(13, 10000);
    // } else if(text == "off") {
    //   noTone(13);
    // }
  }
}