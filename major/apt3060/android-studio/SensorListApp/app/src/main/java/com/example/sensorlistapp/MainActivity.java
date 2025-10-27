package com.example.sensorlistapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.widget.TextView;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private SensorManager curSensorManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        curSensorManager = (SensorManager)
                getSystemService(Context.SENSOR_SERVICE);

        List<Sensor> sensorList = curSensorManager.getSensorList(Sensor.TYPE_ALL);

        StringBuilder sensorText = new StringBuilder();

        for (Sensor currentSensor : sensorList) {
            sensorText.append(currentSensor.getName()).append(
                    System.getProperty("line.separator")
            );
        }
        TextView sensorTextView = (TextView) findViewById(R.id.tvSensors);
        sensorTextView.setText(sensorText);
    }
}