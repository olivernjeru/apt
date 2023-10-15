package com.example.nameentry_usiu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class NameDisplay extends AppCompatActivity {

    public static final String NAME="name";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_name_display);

        TextView mGreetings=(TextView) findViewById(R.id.editTextTextPersonName2);
        Bundle extras=getIntent().getExtras();
        if (extras != null) {
            String name = extras.getString(NAME);
            if (name != null) {
                mGreetings.setText(getString(R.string.messageGreetings) + " " + name);
            }
        }
    }
}