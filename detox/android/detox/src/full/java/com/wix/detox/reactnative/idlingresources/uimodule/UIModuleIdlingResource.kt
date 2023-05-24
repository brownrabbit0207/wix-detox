package com.wix.detox.reactnative.idlingresources.uimodule

import android.util.Log
import android.view.Choreographer
import androidx.test.espresso.IdlingResource.ResourceCallback
import com.facebook.react.bridge.ReactContext
import com.wix.detox.reactnative.helpers.RNHelpers
import com.wix.detox.reactnative.idlingresources.DetoxBaseIdlingResource
import org.joor.ReflectException

/**
 * Espresso IdlingResource for React Native's UI Module.
 * Hooks up to React Native internals to grab the pending ui operations from it.
 */
class UIModuleIdlingResource(private val reactContext: ReactContext)
                return false
            }

            if (RNHelpers.getNativeModule(reactContext, "com.facebook.react.uimanager.UIManagerModule") == null) {
                notifyIdle()
                return true
            }

            val runnablesAreEmpty = uiManagerModuleReflected.isRunnablesListEmpty()
            val nonBatchesOpsEmpty = uiManagerModuleReflected.isNonBatchOpsEmpty()
            var operationQueueEmpty = uiManagerModuleReflected.isOperationQueueEmpty()

            if (!operationQueueEmpty) {
                operationQueueEmpty = rn66workaround.isScarceUISwitchCommandStuckInQueue(uiManagerModuleReflected)
            }

            if (runnablesAreEmpty && nonBatchesOpsEmpty && operationQueueEmpty) {
                notifyIdle()
                return true
            }

            Log.i(LOG_TAG, "UIManagerModule is busy")
            Choreographer.getInstance().postFrameCallback(this)
            return false
        } catch (e: ReflectException) {
            Log.e(LOG_TAG, "Can't set up RN UIModule listener", e.cause)
        }
        notifyIdle()
        return true
    }

    override fun registerIdleTransitionCallback(callback: ResourceCallback) {
        this.callback = callback
        Choreographer.getInstance().postFrameCallback(this)
    }

    override fun doFrame(frameTimeNanos: Long) {
        isIdleNow
    }

    override fun notifyIdle() {
        callback?.run {
            onTransitionToIdle()
        }
    }

    companion object {
        private const val LOG_TAG = "Detox"
    }
}
