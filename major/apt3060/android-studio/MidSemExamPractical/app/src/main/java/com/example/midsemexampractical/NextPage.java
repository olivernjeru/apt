package com.example.midsemexampractical;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class NextPage extends AppCompatActivity {
    private TextView textViewMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.next_activity);

        textViewMessage = findViewById(R.id.textViewMessage);

        String name = getIntent().getStringExtra("name");
        int age = getIntent().getIntExtra("age", 0);
        int time = getIntent().getIntExtra("time", 0);

        int nextHour = (time + 1) % 24;

        String message = "Hi " + name + "! I know you will be " + (age + 1) + " in the next hour, which will be at " + nextHour + ":00.";
        textViewMessage.setText(message);
    }
}


