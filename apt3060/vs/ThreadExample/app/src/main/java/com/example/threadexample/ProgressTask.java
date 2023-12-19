package com.example.threadexample;

import androidx.appcompat.app.AppCompatActivity;

public class ProgressTask implements Runnable{
    private AppCompatActivity refActivity;
    private int progressStatus = 0;
    private Boolean isExiting = false;

    public ProgressTask(AppCompatActivity activity) {
        this.refActivity  = activity;
        isExiting = false;
    }

    public void setStop() {
        isExiting = true;
    }

    public Boolean isDone() {
        return isExiting;
    }

    @Override
    public void run() {
        while (progressStatus < 100 && !isExiting) {
            // do any processing here

            // update the progress bar and display the current value in textView

            progressStatus += 1;

            this.refActivity.runOnUiThread(new Runnable() {
                public void run() {
                    ((MainActivity)refActivity)
                            .progressBar
                            .setProgress(progressStatus);
                    ((MainActivity)refActivity)
                            .tvDisplay
                            .setText(progressStatus
                                    + "/"
                                    + ((MainActivity)refActivity)
                                    .progressBar
                                    .getMax());
                }
            });

            // mimic the long process below
            try {
                // Sleep for 200 milliseconds
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } //end try
        }//end while

        isExiting = true;
    }
}
