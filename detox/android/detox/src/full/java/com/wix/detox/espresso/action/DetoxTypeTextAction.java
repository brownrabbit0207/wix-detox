package com.wix.detox.espresso.action;

import android.view.View;

import org.hamcrest.Matcher;

import androidx.test.espresso.UiController;
import androidx.test.espresso.ViewAction;
import androidx.test.espresso.action.TypeTextAction;

import static org.hamcrest.Matchers.allOf;

public class DetoxTypeTextAction implements ViewAction {
    private final String text;
    private final RNClickAction clickAction;
    private final TypeTextAction typeTextAction;

    public DetoxTypeTextAction(String text) {
        this.text = text;
        clickAction = new RNClickAction();
