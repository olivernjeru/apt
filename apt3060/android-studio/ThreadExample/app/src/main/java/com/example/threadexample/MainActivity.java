package com.example.threadexample;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private Button btnRun, btnStop;
    private ProgressTask ptask;
    private Thread myThread;

    TextView tvDisplay;
    ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tvDisplay = findViewById(R.id.tvDisplay);
        progressBar = findViewById(R.id.progressBar);
        btnRun = findViewById(R.id.btnRun);
        btnStop = findViewById(R.id.btnStop);
    }

    public void runProgressBar(View v) {
        if(myThread == null || (myThread != null && ptask.isDone())); {
            ptask = new ProgressTask(this);
            myThread = new Thread(ptask, "Progress Task");

            myThread.start();
        }
    }

    public void stopProgressBar(View view) {
        if (ptask != null) {
            ptask.setStop();
            ptask = null;
            myThread.interrupt();
            myThread = null;
        }
    }
}