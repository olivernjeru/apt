// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
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
    Serial.print("Character Data = ");
    Serial.println(A);
    if (A == 'o') {
      tone(13, 500);
    } else if (A == 'h') {
      tone(13, 10000);
    } else if (A == 'f') {
      noTone(13);
    }
    
    // String text = Serial.readString();
    // Serial.print("Text Data = ");
    // Serial.println(text);
    // if(text == "on") {
    //   tone(13, 10000);
    // } else if(text == "off") {
    //   noTone(13);
    // }
  }
  delay(1000); // Wait for 1000 millisecond(s)
}