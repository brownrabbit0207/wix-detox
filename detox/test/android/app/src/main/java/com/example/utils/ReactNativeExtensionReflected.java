package com.example.utils;

import java.lang.reflect.Method;

public class ReactNativeExtensionReflected {
    private final Method toggleUISynchronization;
    private final Method toggleTimersSynchronization;
    private final Method toggleNetworkSynchronization;

    static private ReactNativeExtensionReflected INSTANCE = null;
    static public ReactNativeExtensionReflected getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new ReactNativeExtensionReflected();
        }
        return INSTANCE;
    }

    private ReactNativeExtensionReflected() {
        try {
            Class<?> clazz = Class.forName("com.wix.detox.reactnative.ReactNativeExtension");
        try {
            method.invoke(null, enable);
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }
}
