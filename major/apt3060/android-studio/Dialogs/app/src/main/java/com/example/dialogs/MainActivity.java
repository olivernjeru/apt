package com.example.dialogs;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    Button btnGo;
    EditText txtMsg;
    String msg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnGo = findViewById(R.id.btnGo);
        txtMsg = findViewById(R.id.txtMsg);
        btnGo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0) {
                AlertDialog diaBox = createDialogBox();
                diaBox.show();
                txtMsg.setText("I am here!");
            }
        });
    }

    private AlertDialog createDialogBox() {
        AlertDialog myQuittingDialogBox = new AlertDialog.Builder(this)
                //set title and message
                .setTitle("Terminator")
                .setMessage("Are you sure that you want to quit?")
                //set three option buttons
                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {
                msg = "YES " + Integer.toString(whichButton);
                txtMsg.setText(msg);
            }
        }) //set positive button
                .setNeutralButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int whichButton) {
                        //whatever should be done when answering "CANCEL" goes here
                        msg = "CANCEL " + Integer.toString(whichButton);
                        txtMsg.setText(msg);
                    } //OnClick
                }) //setNeutralButton
                .setNegativeButton("NO", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int whichButton) {
                        //whatever should be done when answering "NO" goes here
                        msg = "NO " + Integer.toString(whichButton);
                        txtMsg.setText(msg);
                    } //OnClick
                }) //setNegativeButton)
                .create();
        return myQuittingDialogBox;
    }// createDialogBox
} //class