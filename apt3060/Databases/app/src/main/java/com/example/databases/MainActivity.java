package com.example.databases;

import androidx.appcompat.app.AppCompatActivity;

import android.database.Cursor;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        com.example.files.DBAdapter db = new com.example.files.DBAdapter(this);
        //---add a contact---
        ((com.example.files.DBAdapter) db).open();
        long id = db.insertContact("Jennifer Ann",
                "jenniferann@jfdimarzio.com");
        id = db.insertContact("Oscar Diggs", "oscar@oscardiggs.com");
        db.close();
        //get all contacts
//        db.open();
//        Cursor c = db.getAllContacts();
//        if (c.moveToFirst())
//        {
//            do {
//                DisplayContact(c);
//            } while (c.moveToNext());
//        }
//        db.close();
        //get a contact
//        db.open();
//        Cursor c = db.getContact(2);
//        if (c.moveToFirst())
//            DisplayContact(c);
//        else
//            Toast.makeText(this, "No contact found", Toast.LENGTH_LONG).show();
//        db.close();
        //---update contact---
//        db.open();
//        if (db.updateContact(1, "Oscar Diggs", "oscar@oscardiggs.com"))
//            Toast.makeText(this, "Update successful.",
//                    Toast.LENGTH_LONG).show();
//        else
//            Toast.makeText(this, "Update failed.", Toast.LENGTH_LONG).show();
//        db.close();
        //---delete a contact---
//        db.open();
//        if (db.deleteContact(1))
//            Toast.makeText(this, "Delete successful.",
//                    Toast.LENGTH_LONG).show();
//        else
//            Toast.makeText(this, "Delete failed.", Toast.LENGTH_LONG).show();
//        db.close();
    }
    public void DisplayContact(Cursor c)
    {
        Toast Toast = null;
        Toast.makeText(this,
                "id: " + c.getString(0) + "\n" +
                        "Name: " + c.getString(1) + "\n" +
                        "Email: " + c.getString(2),
                Toast.LENGTH_LONG).show();
    }
}