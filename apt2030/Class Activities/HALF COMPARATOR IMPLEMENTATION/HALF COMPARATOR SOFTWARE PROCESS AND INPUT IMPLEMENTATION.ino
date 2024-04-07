void setup()
{
    pinMode(2, OUTPUT); // Difference output
    pinMode(3, OUTPUT); // Borrow output
    Serial.begin(9600); // Initialize serial communication for debugging
}

void loop()
{
    if (Serial.available() > 0)
    {
        int A = Serial.parseInt(); // Read input A
        Serial.print("A= ");
        Serial.println(A);
        int B = Serial.parseInt(); // Read input B
        Serial.print("B= ");
        Serial.println(B);

        // Calculate Difference (A XOR B)
        int Diff = A ^ B;
        digitalWrite(2, Diff); // Output Difference

        // Calculate Borrow (NOT A AND B)
        int Borrow = !A & B;
        digitalWrite(3, Borrow); // Output Borrow
    }
}
