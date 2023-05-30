package com.wix.detox.espresso.action

import android.view.View
import androidx.test.espresso.UiController
import androidx.test.espresso.ViewAction
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.events.Event
        val reactTag = view.id

        UIManagerHelper.getEventDispatcherForReactTag(reactContext, reactTag)
            ?.dispatchEvent(
                TopAccessibilityEvent(
                    surfaceId = UIManagerHelper.getSurfaceId(reactContext),
                    viewId = reactTag,
                    actionName = mActionName,
                )
            )

        val waitTimeMS = 100
        uiController!!.loopMainThreadForAtLeast(waitTimeMS.toLong())
    }
}

class TopAccessibilityEvent(surfaceId: Int, viewId: Int, private val actionName: String) :
    Event<TopAccessibilityEvent>(surfaceId, viewId) {

    override fun getEventName(): String = "topAccessibilityAction"

    override fun getEventData(): WritableMap? {
        return Arguments.createMap().apply { putString("actionName", actionName) }
    }
}
