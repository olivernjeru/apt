package com.example.forminputexample;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;

import java.util.Date;

public class DataInput extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        DatePicker dp=(DatePicker) findViewById(R.id.DOBInput);
        dp.init(2000, 0, 13, null);

        Button nxtBtn=(Button) findViewById(R.id.NextButton);
        nxtBtn.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                displayNextAlert();
            }
        });
    }

    public boolean onCreateOptionsMenu(Menu menu)
    {
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }

    public boolean onOptionsItemSelected(MenuItem item)
    {
        int itemId = item.getItemId();

        if (itemId == R.id.itemNext) {
            displayNextAlert();
            return true;
        } else if (itemId == R.id.itemExit) {
            // Do nothing - coming to it...
            return true;
        } else {
            return super.onOptionsItemSelected(item);
        }
    }

    private void displayNextAlert() {
        EditText nameInput=(EditText) findViewById(R.id.NameInput);
        DatePicker dp=(DatePicker) findViewById(R.id.DOBInput);
        EditText emailInput=(EditText) findViewById(R.id.EmailInput);

        String strName=nameInput.getText().toString();
        String strDOB=dp.getDayOfMonth() + "/" + (dp.getMonth()+1) + "/" + dp.getYear();
        String strEmail=emailInput.getText().toString();
        new AlertDialog.Builder(this).
                setTitle("Details Entered").
                setMessage("Name: " + strName + "\n" + "Date of Birth: " + strDOB + "\n" + "Email Address: " + strEmail).
                setNeutralButton("Back", new DialogInterface.OnClickListener()
                {
                    public void onClick(DialogInterface dialog, int which)
                    {

                    }
        }).show();
    }
}