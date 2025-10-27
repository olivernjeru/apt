void setup()
{
    pinMode(2, OUTPUT); // Difference output
    pinMode(3, OUTPUT); // Borrow output
    pinMode(4, INPUT);  // Input A
    pinMode(5, INPUT);  // Input B
    Serial.begin(9600); // Initialize serial communication for debugging
}

void loop()
{
    int A = digitalRead(4); // Read input A
    Serial.print("A= ");
    Serial.println(A);
    int B = digitalRead(5); // Read input B
    Serial.print("B= ");
    Serial.println(B);

    // Calculate Difference (A XOR B)
    int Diff = A ^ B;
    digitalWrite(2, Diff); // Output Difference

    // Calculate Borrow (NOT A AND B)
    int Borrow = !A & B;
    digitalWrite(3, Borrow); // Output Borrow
}
