package com.example.calculator;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import java.util.regex.Pattern;

public class MainActivity extends AppCompatActivity {
    private EditText editTextCalculator;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextCalculator = findViewById(R.id.editTextCalculator);
    }

    public void appendToCalculator(View view) {
        Button button = (Button) view;
        String buttonText = button.getText().toString();
        String currentText = editTextCalculator.getText().toString();
        editTextCalculator.setText(currentText + buttonText);
    }

    public void clearCalculator(View view) {
        editTextCalculator.setText("");
    }

    public void calculateResult(View view) {
        String expression = editTextCalculator.getText().toString().trim();

        if (expression.isEmpty()) {
            editTextCalculator.setText("Error: Empty input");
            return;
        }

        String[] operators = {"+", "-", "*", "/"};

        String operator = null;
        double num1, num2;

        for (String op : operators) {
            if (expression.contains(op)) {
                operator = op;
                break;
            }
        }

        if (operator == null) {
            editTextCalculator.setText("Error: Invalid expression");
            return;
        }

        String[] parts = expression.split(Pattern.quote(operator));

        if (parts.length != 2) {
            editTextCalculator.setText("Error: Invalid expression");
            return;
        }

        try {
            num1 = Double.parseDouble(parts[0].trim());
            num2 = Double.parseDouble(parts[1].trim());

            double result = 0;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        editTextCalculator.setText("Error: Division by zero");
                        return;
                    }
                    break;
                default:
                    editTextCalculator.setText("Error: Unsupported operator");
                    return;
            }

            editTextCalculator.setText(Double.toString(result));
        } catch (NumberFormatException e) {
            editTextCalculator.setText("Error: Invalid numbers");
        }
    }

}