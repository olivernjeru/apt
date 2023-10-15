package com.example.nameentry_usiu;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private EditText mNameText; //instance variable
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mNameText=(EditText) findViewById(R.id.editTextTextPersonName);
        Button nextButton=(Button) findViewById(R.id.button);
        Button doNotButton=(Button) findViewById(R.id.btnDoNot);
        nextButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v){

                handleButton();
            }
        });

        doNotButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                handleButtonTwo();
            }
        });
    }

    private void handleButton() {
//        mNameText.setText("The button says that it has been clicked.");

        String strName=mNameText.getText().toString();

        Intent i=new Intent(this, NameDisplay.class);
        i.putExtra(NameDisplay.NAME,strName);
        startActivity(i);
    }

    private void handleButtonTwo() {
            String strName=mNameText.getText().toString();
            Intent i=new Intent(this, DoNotActivity.class);
            i.putExtra(DoNotActivity.NAME,strName);
            startActivity(i);
        }

}