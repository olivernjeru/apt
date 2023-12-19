package com.example.newchatgptapp;

import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.util.Log;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    TextView responseTV, questionTV;
    TextInputEditText queryEdt;

    String url = "https://api.openai.com/v1/completions";
    String apiKey = "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"; // Replace with your actual OpenAI API key

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        responseTV = findViewById(R.id.tvResponse);
        questionTV = findViewById(R.id.tvQuestion);
        queryEdt = findViewById(R.id.edtQuery);
        responseTV.setMovementMethod(new ScrollingMovementMethod());

        queryEdt.setOnEditorActionListener((textView, actionId, keyEvent) -> {
            if (actionId == EditorInfo.IME_ACTION_SEND) {
                responseTV.setText("Please wait... ");
                if (queryEdt.getText() != null && queryEdt.getText().length() > 0) {
                    getResponse(queryEdt.getText().toString());
                } else {
                    Toast.makeText(MainActivity.this, "Please enter your query...", Toast.LENGTH_SHORT).show();
                }
            }
            return false;
        });
    }

    private void getResponse(String query) {
        questionTV.setText(query);
        queryEdt.setText("");

        RequestQueue queue = Volley.newRequestQueue(getApplicationContext());

        JSONObject jsonObject = new JSONObject();

        try {
            jsonObject.put("model", "chat-gpt-3.5-turbo");
            jsonObject.put("prompt", query);
            jsonObject.put("temperature", 0);
            jsonObject.put("max_tokens", 100);
            jsonObject.put("top_p", 1);
            jsonObject.put("frequency_penalty", 0.0);
            jsonObject.put("presence_penalty", 0.0);
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }

        JsonObjectRequest postRequest = new JsonObjectRequest(
                Request.Method.POST,
                url,
                jsonObject,
                response -> {
                    try {
                        String responseMsg = response.getJSONArray("choices").getJSONObject(0).getString("text");
                        responseTV.setText(responseMsg);
                    } catch (JSONException e) {
                        Log.e("Error", "Message" + e.getMessage());
                        throw new RuntimeException(e);
                    }
                },
                error -> Log.e("TAGAPI", "Error is : " + error.getMessage() + "\n" + error)
        ) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                HashMap<String, String> params = new HashMap<>();
                params.put("Content-Type", "application/json");
                params.put("Authorization", "Bearer " + apiKey);
                return params;
            }
        };

        postRequest.setRetryPolicy(new RetryPolicy() {
            @Override
            public int getCurrentTimeout() {
                return 50000;
            }

            @Override
            public int getCurrentRetryCount() {
                return 0; // 0 means no retries
            }

            @Override
            public void retry(VolleyError error) throws VolleyError {
                // Retry logic if needed
            }
        });

        queue.add(postRequest);
    }
}
