package com.example.nameentry_usiu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class DoNotActivity extends AppCompatActivity {

    public static final String NAME="name";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_do_not);

        TextView mDoNot=(TextView) findViewById(R.id.textViewDoNot);
        Bundle extras=getIntent().getExtras();
        if (extras != null) {
            String name = extras.getString(NAME);
            if (name != null) {
                mDoNot.setText(getString(R.string.doNotMessage) + " " + name);
            }
        }
    }
}