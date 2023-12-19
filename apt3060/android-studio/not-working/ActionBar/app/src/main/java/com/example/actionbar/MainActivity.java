package com.example.actionbar;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

public class MainActivity extends ActionBarActivity {
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        // reads XML
        inflater.inflate(R.menu.menu_main, menu);
        // to create
        return super.onCreateOptionsMenu(menu);
        // the menu
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // TODO: handle clicks on the menu items
        return super.onOptionsItemSelected(item);     }
}

public class MainActivity extends ActionBarActivity {
    /* Handles presses on the action bar items. */
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == R.id.action_send) {
            // do something;
        } else if (item.getItemId() == R.id.action_archive) {
            // do something;
        } else if (item.getItemId() == R.id.action_open) {
    // do something;
        }
    return super.onOptionsItemSelected(item);     } }
