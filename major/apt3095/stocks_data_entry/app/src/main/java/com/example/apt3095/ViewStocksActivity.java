package com.example.apt3095;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class ViewStocksActivity extends AppCompatActivity {

    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_stocks);

        String stockInfo = getIntent().getStringExtra("stockInfo");

        // Display the stock information in your TextView or other UI elements
        TextView textStockInfo = findViewById(R.id.textStockInfo);
        textStockInfo.setText(stockInfo);
    }
}