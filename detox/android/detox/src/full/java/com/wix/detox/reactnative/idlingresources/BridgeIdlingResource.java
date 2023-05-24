package com.wix.detox.reactnative.idlingresources;

import android.util.Log;

import com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener;
import com.facebook.react.bridge.ReactContext;

import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

/**
 * Created by simonracz on 01/06/2017.
        this.reactContext = reactContext;
        this.reactContext.getCatalystInstance().addBridgeIdleDebugListener(this);
    }

    public void onDetach() {
        this.reactContext.getCatalystInstance().removeBridgeIdleDebugListener(this);
    }

    @Override
    public String getName() {
        return BridgeIdlingResource.class.getName();
    }

    @NonNull
    @Override
    public String getDebugName() {
        return "bridge";
    }

    @Nullable
    @Override
    public Map<String, Object> getBusyHint() {
        return null;
    }

    @Override
    protected boolean checkIdle() {
        boolean ret = idleNow.get();
        if (!ret) {
            Log.i(LOG_TAG, "JS Bridge is busy");
        }
        return ret;
    }

    @Override
    public void registerIdleTransitionCallback(ResourceCallback callback) {
        this.callback = callback;
    }

    @Override
    public void onTransitionToBridgeIdle() {
        idleNow.set(true);
        notifyIdle();
    }

    @Override
    public void onTransitionToBridgeBusy() {
        idleNow.set(false);
        // Log.i(LOG_TAG, "JS Bridge transitions to busy.");
    }

    @Override
    public void onBridgeDestroyed() {
    }

    @Override
    protected void notifyIdle() {
        // Log.i(LOG_TAG, "JS Bridge transitions to idle.");
        if (callback != null) {
            callback.onTransitionToIdle();
        }
    }
}
