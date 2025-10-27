package com.example.activitylifecycle;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private int myCount=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //get a reference
        ((TextView) findViewById(R.id.textViewState)).setText("We are on the onCreate()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onCreate() " + myCount);

    }

    protected void onStart()
    {
        super.onStart();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onStart()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onStart() "+ myCount);
    }

    protected void onResume()
    {
        super.onResume();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onResume()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onResume() "+ myCount);
    }

    protected void onPause()
    {
        super.onPause();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onPause()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onPause() "+ myCount);
    }

    protected void onStop()
    {
        super.onStop();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onStop()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onStop() "+ myCount);
    }

    protected void onRestart()
    {
        super.onRestart();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onRestart()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onRestart() "+ myCount);
    }

    protected void onDestroy()
    {
        super.onDestroy();
        ((TextView)findViewById(R.id.textViewState)).append("We are on the onDestroy()\n");
        myCount++;
        Log.d("StatusInfo", "We are on the onDestroy() "+ myCount);
    }

    public void onSaveInstanceState(Bundle savedInstanceState)
    {
        super.onSaveInstanceState(savedInstanceState);
        Log.d("StatusInfo", "We are now saving data" +myCount);
        savedInstanceState.putInt("myCount", myCount);
    }

    public void onRestoreInstanceState(Bundle savedInstanceState)
    {
        Log.d("StatusInfo", "We are now retrieving data" +myCount);
        myCount=savedInstanceState.getInt("myCount");
    }
}