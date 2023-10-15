package com.example.mark_if;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    private TextView markTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Random myRandom = new Random();
        int mark = myRandom.nextInt(100);
        markTextView = findViewById(R.id.markValue);
        markTextView.setText(" " + mark + "\n\n");

        char Grade = ' ';
        if(mark<60){
            Grade = 'F';
        } else if (mark<70) {
            Grade = 'D';
        } else if (mark<80) {
            Grade = 'C';
        } else if (mark<90) {
            Grade = 'B';
        }else {
            Grade = 'A';
        }
        markTextView.append("Grade is " + Grade);
    }
}