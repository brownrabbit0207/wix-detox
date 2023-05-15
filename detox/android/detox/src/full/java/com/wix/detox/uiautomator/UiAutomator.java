package com.wix.detox.uiautomator;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.uiautomator.UiDevice;


    public static UiDevice uiDevice() {
        return UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
    }
}
