package com.wix.detox

import android.util.Log
import com.wix.detox.adapters.server.OutboundServerAdapter

class DetoxCrashHandler(private val outboundServerAdapter: OutboundServerAdapter) {
    fun attach() {
        Thread.setDefaultUncaughtExceptionHandler { thread, exception ->
            Log.e(LOG_TAG, "Crash detected!!! thread=${thread.name} (${thread.id})", exception)

}
