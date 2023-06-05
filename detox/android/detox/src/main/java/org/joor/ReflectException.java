/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * limitations under the License.
 */
package org.joor;

import java.lang.reflect.InvocationTargetException;

/**
 * A unchecked wrapper for any of Java's checked reflection exceptions:
 * <p>
 * These exceptions are
 * <ul>
 * <li> {@link ClassNotFoundException}</li>
 * <li> {@link IllegalAccessException}</li>
 * <li> {@link IllegalArgumentException}</li>
 * <li> {@link InstantiationException}</li>
 * <li> {@link InvocationTargetException}</li>
 * <li> {@link NoSuchMethodException}</li>
 * <li> {@link NoSuchFieldException}</li>
 * <li> {@link SecurityException}</li>
 * </ul>
 *
 * @author Lukas Eder
 */
public class ReflectException extends RuntimeException {

    /**
     * Generated UID
     */
    private static final long serialVersionUID = -6213149635297151442L;

    public ReflectException(String message) {
        super(message);
    }

    public ReflectException(String message, Throwable cause) {
        super(message, cause);
    }

    public ReflectException() {
        super();
    }

    public ReflectException(Throwable cause) {
        super(cause);
    }
}
