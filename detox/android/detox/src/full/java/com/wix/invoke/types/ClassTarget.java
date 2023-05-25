package com.wix.invoke.types;

import android.util.Log;
;

import org.apache.commons.lang3.reflect.MethodUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;

/**
 * Created by rotemm on 20/10/2016.
 */
public class ClassTarget extends Target {

    public ClassTarget(Object value) {
        super(value);
    }

    @Override
