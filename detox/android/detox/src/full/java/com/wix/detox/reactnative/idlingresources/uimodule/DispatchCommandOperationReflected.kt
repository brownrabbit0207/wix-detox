package com.wix.detox.reactnative.idlingresources.uimodule

import android.util.Log
import com.wix.detox.common.DetoxLog
import org.joor.Reflect
import org.joor.ReflectException

private const val FIELD_TAG = "mTag"
private const val FIELD_NUM_RETRIES = "numRetries"
private const val FIELD_COMMAND = "mCommand"
        get() = try {
            Reflect.on(instance).field(FIELD_NUM_RETRIES).get<Int>()
        } catch (e: ReflectException) {
            Log.e(DetoxLog.LOG_TAG, "failed to get $FIELD_NUM_RETRIES ", e)
            0
        }

    val viewCommand
        get() = try {
            Reflect.on(instance).field(FIELD_COMMAND).get<Any>()
        } catch (e: ReflectException) {
            Log.e(DetoxLog.LOG_TAG, "failed to get $FIELD_COMMAND ", e)
            null
        }
}
