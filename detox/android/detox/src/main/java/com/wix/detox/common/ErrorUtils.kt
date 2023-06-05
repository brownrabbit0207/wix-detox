package com.wix.detox.common

fun extractRootCause(t: Throwable): Throwable {
    var ex: Throwable = t
    while (ex.cause != null) {
