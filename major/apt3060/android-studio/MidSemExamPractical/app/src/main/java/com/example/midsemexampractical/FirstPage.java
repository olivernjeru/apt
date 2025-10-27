package com.example.midsemexampractical;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class FirstPage extends AppCompatActivity {

    private EditText editTextName;
    private EditText editTextAge;
    private EditText editTextTime;
    private Button buttonSubmit;

    @Override

    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.main_activity);

        editTextName = findViewById(R.id.editTextName);
        editTextAge = findViewById(R.id.editTextAge);
        editTextTime = findViewById(R.id.editTextTime);
        buttonSubmit = findViewById(R.id.buttonSubmit);

        buttonSubmit.setOnClickListener(new View.OnClickListener() {

            @Override

            public void onClick(View view) {

                String name = editTextName.getText().toString();
                int age = Integer.parseInt(editTextAge.getText().toString());
                int time = Integer.parseInt(editTextTime.getText().toString());

                Intent intent = new Intent(FirstPage.this, NextPage.class);
                intent.putExtra("name", name);
                intent.putExtra("age", age);
                intent.putExtra("time", time);
                startActivity(intent);

            }

        });

    }

}
