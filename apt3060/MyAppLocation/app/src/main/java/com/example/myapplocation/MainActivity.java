package com.example.myapplocation;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.annotation.SuppressLint;
import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;
import android.Manifest;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;

public class MainActivity extends AppCompatActivity {

    private FusedLocationProviderClient locationClient;
    private final int REQUEST_PERMISSION_FINE_LOCATION = 1;
    private TextView txtLocation;

    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           @NonNull String[] permissions,
                                           @NonNull int[] grantResults)
    {
        switch (requestCode) {
            case REQUEST_PERMISSION_FINE_LOCATION:
                if (grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity. this, "Permission Granted!", Toast.LENGTH_LONG).show();
                    showLocation();
                } else {
                    Toast.makeText(MainActivity.this,
                            "Permission Denied!", Toast.LENGTH_LONG).show();
                    txtLocation.setText("Location permission not granted");
                }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        locationClient = LocationServices.getFusedLocationProviderClient(this);
        txtLocation = ((TextView) findViewById(R.id.txtLocation));

        if (ActivityCompat.checkSelfPermission(this,
                android.Manifest.permission.ACCESS_FINE_LOCATION) !=
                PackageManager.PERMISSION_GRANTED)
        {
            requestPermissions(new String[] {Manifest.permission.ACCESS_FINE_LOCATION}, REQUEST_PERMISSION_FINE_LOCATION);
        } else {
            showLocation();
        }
    }

    @SuppressLint({"Missing Permission", "MissingPermission"})
    private void showLocation()
    {
        locationClient.getLastLocation().
                addOnSuccessListener(this, new OnSuccessListener<Location>() {
        @Override
        public void onSuccess(Location location) {
            if (location != null) {
                txtLocation.setText("Current location is:\nLat:" +
                        location.getLatitude()
                + "\nLon: " + location.getLongitude());
            }
        }
    });

        locationClient.getLastLocation().
                addOnCompleteListener(this, new OnCompleteListener<Location>() {
                    @Override
                    public void onComplete(@NonNull Task<Location> task) {
                        if(task.isSuccessful()) {
                            Location location = task.getResult();
                            if (location != null) {
                                txtLocation.setText("Current location is:\nLat:" + location.getLatitude() +
                                         "\nLon: " + location.getLongitude());
                            }
                            else {
                                txtLocation.setText("Problem getting the location");
                            }
                        }
        }
    });
    }
}