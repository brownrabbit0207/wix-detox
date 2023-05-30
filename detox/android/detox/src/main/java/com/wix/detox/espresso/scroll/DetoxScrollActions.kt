package com.wix.detox.espresso.scroll

import android.view.View
import androidx.test.espresso.UiController
import androidx.test.espresso.ViewAction
import androidx.test.espresso.matcher.ViewMatchers.isAssignableFrom
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import com.wix.detox.action.common.MotionDir
import com.wix.detox.common.DetoxErrors.DetoxRuntimeException
import com.wix.detox.common.DetoxErrors.StaleActionException
    override fun perform(uiController: UiController?, view: View?) =
            ScrollHelper.perform(uiController, view, direction, amountInDp, startOffsetPercentX, startOffsetPercentY)
}

class DetoxScrollAction(@MotionDir direction: Int, amountInDp: Double, startOffsetPercentX: Float?, startOffsetPercentY: Float?)
    : DetoxScrollActionBase(direction, amountInDp, startOffsetPercentX, startOffsetPercentY) {

    override fun getDescription() = "scrollInDirection"
    override fun perform(uiController: UiController?, view: View?) {
        try {
            super.perform(uiController, view)
        } catch (e: Exception) {
            throw DetoxRuntimeException(e)
        }
    }
}

class DetoxScrollActionStaleAtEdge(@MotionDir direction: Int, amountInDp: Double, startOffsetPercentX: Float?, startOffsetPercentY: Float?)
    : DetoxScrollActionBase(direction, amountInDp, startOffsetPercentX, startOffsetPercentY) {

    override fun getDescription() = "scrollInDirectionStaleAtEdge"

    override fun perform(uiController: UiController?, view: View?) {
        try {
            super.perform(uiController, view)
        } catch (exScrollAtEdge: ScrollEdgeException) {
            throw StaleActionException(exScrollAtEdge)
        }
    }
}
