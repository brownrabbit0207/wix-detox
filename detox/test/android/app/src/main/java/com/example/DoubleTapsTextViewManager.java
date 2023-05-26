package com.example;

import android.graphics.Color;
import android.view.GestureDetector;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.example.utils.DoubleTapListenerStub;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class DoubleTapsTextViewManager extends SimpleViewManager<ViewGroup> {
    private static class ViewState {
        int taps = 0;
    }

    @Override
    public String getName() {
        return "DetoxDoubleTapsTextView";
    }
        textView.setOnClickListener(v -> {});

        layout.addView(textView);
        return layout;
    }
}
