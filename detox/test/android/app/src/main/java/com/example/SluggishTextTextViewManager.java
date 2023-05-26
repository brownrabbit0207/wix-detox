package com.example;

import android.graphics.Color;
import android.util.Log;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class SluggishTextTextViewManager extends SimpleViewManager<ViewGroup> {
    @Override
    public String getName() {
        return "DetoxSluggishTapsTextView";
    }

    @Override
    protected ViewGroup createViewInstance(ThemedReactContext reactContext) {
        final FrameLayout layout = new FrameLayout(reactContext);
