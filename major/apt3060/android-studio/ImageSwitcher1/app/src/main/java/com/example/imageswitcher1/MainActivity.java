package com.example.imageswitcher1;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.imageswitcher1.R;

public class MainActivity extends AppCompatActivity {

    private ImageView imageView;
    private Button btnPrevious, btnNext;

    private int[] imageResources = {R.drawable.model, R.drawable.building, R.drawable.drone};
    private int currentImageIndex = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imageView = findViewById(R.id.imageView);
        btnPrevious = findViewById(R.id.btnPrevious);
        btnNext = findViewById(R.id.btnNext);

        updateImage();

        btnPrevious.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showPreviousImage();
            }
        });

        btnNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showNextImage();
            }
        });
    }

    public void showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateImage();
        }
    }

    public void showNextImage() {
        if (currentImageIndex < imageResources.length - 1) {
            currentImageIndex++;
            updateImage();
        }
    }

    private void updateImage() {
        imageView.setImageResource(
                imageResources[currentImageIndex]);
    }
}