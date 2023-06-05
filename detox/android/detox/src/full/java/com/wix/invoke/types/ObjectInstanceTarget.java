package com.wix.invoke.types;


import org.apache.commons.lang3.reflect.MethodUtils;

public class ObjectInstanceTarget extends Target {

    public ObjectInstanceTarget(Object value) {
        super(value);
    }

    @Override
    public Object execute(Invocation invocation) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        return  MethodUtils.invokeExactMethod(this.value, invocation.getMethod(), invocation.getArgs());
    }
}
