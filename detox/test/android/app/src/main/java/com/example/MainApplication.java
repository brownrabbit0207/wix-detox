package com.example;

import android.app.Application;
import android.webkit.WebView;


    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        SoLoader.init(this, /* native exopackage */ false);
        WebView.setWebContentsDebuggingEnabled(true);
    }
}
