package com.example.menuexample;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int itemId = item.getItemId();

        if (itemId == R.id.menu_option_1) {
            // Handle Option 1
            return true;
        } else if (itemId == R.id.menu_option_2) {
            // Handle Option 2
            return true;
        } else if (itemId == R.id.menu_option_3) {
            // Handle Option 3
            return true;
        } else if (itemId == R.id.menu_option_4) {
            // Handle Option 4
            return true;
        }

        return super.onOptionsItemSelected(item);
        }
    }