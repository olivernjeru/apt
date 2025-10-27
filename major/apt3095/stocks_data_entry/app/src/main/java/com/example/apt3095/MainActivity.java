package com.example.apt3095;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {
    FirebaseDatabase rootNode;
    DatabaseReference databaseReference;
    EditText stockTicker, stockQuantity, stockBid, stockOffer;
    long currentTimeMillis = System.currentTimeMillis();
    SimpleDateFormat dateTimeFormat = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss", Locale.getDefault());
    Date currentDate = new Date(currentTimeMillis);
    String formattedDateTime = dateTimeFormat.format(currentDate);
    String time = formattedDateTime;
    private Handler handler;
    Button btnSendQuote;
    Button btnViewQuote;
    Button btnDeleteQuote;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        FirebaseDatabase.getInstance().setPersistenceEnabled(true);
        rootNode = FirebaseDatabase.getInstance();

        stockTicker = findViewById(R.id.editStockTicker);
        stockQuantity = findViewById(R.id.editStockQuantity);
        stockBid = findViewById(R.id.editStockBid);
        stockOffer = findViewById(R.id.editStockOffer);
        handler = new Handler();
        handler.post(updateTimeRunnable);
        btnSendQuote = findViewById(R.id.btnSendQuote);
        btnViewQuote = findViewById(R.id.btnViewQuote);
        btnDeleteQuote = findViewById(R.id.btnDeleteQuote);


        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM:dd:yyyy", Locale.getDefault());
        String formattedDate = dateFormat.format(currentDate);

        btnSendQuote.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rootNode = FirebaseDatabase.getInstance();
                databaseReference = rootNode.getReference(formattedDate);

                String ticker = stockTicker.getEditableText().toString();
                String quantity = stockQuantity.getEditableText().toString();
                String bid = stockBid.getEditableText().toString();
                String offer = stockOffer.getEditableText().toString();

                StocksDataEntryHelperClass helperClass = new StocksDataEntryHelperClass(ticker, quantity, bid, offer, time, formattedDate);

                databaseReference.child(time).setValue(helperClass)
                        .addOnSuccessListener(new OnSuccessListener<Void>() {
                            @Override
                            public void onSuccess(Void unused) {
                                Toast.makeText(getApplicationContext(), "Quote sent!", Toast.LENGTH_SHORT).show();
                            }
                        })
                        .addOnFailureListener(new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                Toast.makeText(getApplicationContext(), "Failed, quote not sent", Toast.LENGTH_SHORT).show();
                            }
                        })
                        .addOnCompleteListener(new OnCompleteListener<Void>() {
                            @Override
                            public void onComplete(@NonNull Task<Void> task) {
                                Toast.makeText(getApplicationContext(), "Completed!", Toast.LENGTH_SHORT).show();
                            }
                        });
            }
        });

        btnViewQuote.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                viewAllStocksFromDatabase();
            }

            private void viewAllStocksFromDatabase() {
                DatabaseReference stocksReference = rootNode.getReference(formattedDate);

                stocksReference.addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                        StringBuilder stocksInfoBuilder = new StringBuilder();
                        for (DataSnapshot stockSnapshot : dataSnapshot.getChildren()) {
                            StocksDataEntryHelperClass stock = stockSnapshot.getValue(StocksDataEntryHelperClass.class);

                            if (stock != null) {
                                String stockInfo = "Ticker: " + stock.getTicker() + "\n"
                                        + "Quantity: " + stock.getQuantity() + "\n"
                                        + "Bid: " + stock.getBid() + "\n"
                                        + "Offer: " + stock.getOffer() + "\n"
                                        + "Time: " + stock.getTime() + "\n"
                                        + "Date: " + stock.getDate() + "\n";

                                stocksInfoBuilder.append(stockInfo).append("\n");
                            }
                        }

                        String allStocksInfo = stocksInfoBuilder.toString();
                        Intent intent = new Intent(MainActivity.this, ViewStocksActivity.class);
                        intent.putExtra("stockInfo", allStocksInfo);
                        startActivity(intent);
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError databaseError) {
                        Toast.makeText(MainActivity.this, "Failed to retrieve stocks: " + databaseError.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });

        btnDeleteQuote.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatabaseReference rootReference = rootNode.getReference();
                deleteAllDataFromDatabase(rootReference);
            }
        });
    }

    private Runnable updateTimeRunnable = new Runnable() {
        @Override
        public void run() {
            long currentTimeMillis = System.currentTimeMillis();
            SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
            Date currentDate = new Date(currentTimeMillis);
            String formattedTime = sdf.format(currentDate);
            time = formattedTime;
            handler.postDelayed(this, 1);
        }
    };

    @Override
    protected void onDestroy() {
        super.onDestroy();
        handler.removeCallbacks(updateTimeRunnable);
    }

    private void deleteAllDataFromDatabase(DatabaseReference rootReference) {
        rootReference.removeValue()
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void unused) {
                        Toast.makeText(getApplicationContext(), "All data deleted successfully", Toast.LENGTH_SHORT).show();
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Toast.makeText(getApplicationContext(), "Failed to delete data: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                });
    }
}
