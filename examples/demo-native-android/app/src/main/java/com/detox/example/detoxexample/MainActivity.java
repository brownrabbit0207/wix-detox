package com.detox.example.detoxexample;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

        setOnClickListener(worldButton, getString(R.string.world));
    }

    private void setOnClickListener(final Button button, final String text) {
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mTextView.setText(text);
            }
        });
    }
}