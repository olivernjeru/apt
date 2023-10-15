package com.example.hellousiu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView main = findViewById(R.id.mark);

        int mark = 0;
        Random r = new Random();
        mark = r.nextInt(100);

        main.setText("Welcome to programming\n");
        main.append("Your mark is: " + mark + "\n");
        if(mark>=90) {
            main.append("Your grade is A\n");
        } else if (mark>=87 && mark<=89) {
            main.append("Your grade is A-\n");
        } else if (mark>=84 && mark<=86) {
            main.append("Your grade is B+\n");
        } else if (mark>=80 && mark<=83) {
            main.append("Your grade is B\n");
        } else if (mark>=77 && mark<=79) {
            main.append("Your grade is B-\n");
        } else if (mark>=74 && mark<=76) {
            main.append("Your grade is C+\n");
        } else if (mark>=70 && mark<=73) {
            main.append("Your grade is C\n");
        } else if (mark>=67 && mark<=69) {
            main.append("Your grade is C-\n");
        } else if (mark>=64 && mark<=66) {
            main.append("Your grade is D+\n");
        } else if (mark>=60 && mark<=63) {
            main.append("Your grade is D\n");
        } else {
            main.append("Your grade is F\n");
        }
    }
}