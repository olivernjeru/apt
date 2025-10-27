package com.example.chatgptapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.util.Log;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.Volley;
import com.android.volley.toolbox.JsonObjectRequest;
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
public class MainActivity extends AppCompatActivity {

    TextView responseTV, questionTV;
    TextInputEditText queryEdt;

    String url="https://api.openai.com/v1/completions";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        responseTV = findViewById(R.id.tvResponse);
        questionTV = findViewById(R.id.tvQuestion);
        queryEdt = findViewById(R.id.edtQuery);
        responseTV.setMovementMethod(new ScrollingMovementMethod());

        queryEdt.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int i, KeyEvent keyEvent) {
                if(i== EditorInfo.IME_ACTION_SEND) {
                    //setting response tv
                    responseTV.setText("Please wait... ");
                    //validating text
                    if (queryEdt.getText().toString().length() > 0) {
                        //calling get response to get the response

                        getResponse(queryEdt.getText().toString());
                    }
                    else {
                        Toast.makeText(MainActivity.this,
                                "Please enter your query...",
                                Toast.LENGTH_SHORT).show();
                    }
                }
                return false;
            }
        });
    }
    private void getResponse(String query) {
        //setting text on the question
        questionTV.setText(query);
        queryEdt.setText("");

        //queue of requests
        RequestQueue queue = Volley.newRequestQueue(getApplicationContext());

        //create a json object on below line
        JSONObject jsonObject = new JSONObject();

        //adding params to json object
        try {
            jsonObject.put("model", "text-davinci-003");
            jsonObject.put("prompt", query);
            jsonObject.put("temperature", 0);
            jsonObject.put("max_tokens", 100);
            jsonObject.put("top_p", 1);
            jsonObject.put("frequency_penalty", 0.0);
            jsonObject.put("presence_penalty", 0.0);
        }
        catch (JSONException e) {
            throw new RuntimeException(e);
        }

        JsonObjectRequest postRequest = new JsonObjectRequest(Request.Method.POST,
                url,
                jsonObject,
                new Response.Listener<JSONObject>()
        {
            @Override
            public void onResponse(JSONObject response) {
                try {
                    String responseMsg = response.getJSONArray("choices")
                            .getJSONObject(0)
                            .getString("text");
                    responseTV.setText(responseMsg);
                } catch (JSONException e) {
                    Log.e("Error", "Message" + e.getMessage());
                    throw new RuntimeException(e);
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("TAGAPI", "Error is : " + error.getMessage() + "\n" + error);
            }
        }
        )
        {
            /**
             * Passing some header requests
             */
            @Override
            public Map<String, String> getHeaders () throws AuthFailureError {
            HashMap<String, String> params = new HashMap<String, String>();

            //adding headers on below line
            params.put("Content-Type", "application/json");
            params.put("Authorization", "Bearer apikeyfromopenai");

            return params;

            //HashMap<String, String> headers = new HashMap<String, String> ();
            //headers.put("Content-Type", "application/json"):
            //headers.put("key", "Value");
            // return headers;
        }
        };

            //on below line adding retry policy for our request
            postRequest.setRetryPolicy(new RetryPolicy() {
                @Override
                public int getCurrentTimeout() { return 50000; }

                @Override
                public int getCurrentRetryCount() { return 50000; }

                @Override
                public void retry(VolleyError error) throws VolleyError {

                }
            });

            //on below line adding our request to queue
            queue.add(postRequest);
            }
        }

