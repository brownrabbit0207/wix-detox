package com.wix.detox.espresso.common

import com.wix.detox.espresso.action.common.utils.getUiController
import org.joor.Reflect

        Reflect.on(getUiController()).field(FIELD_ASYNC_IDLE).call(METHOD_IS_IDLE_NOW).get()

    fun isCompatIdleNow(): Boolean =
        Reflect.on(getUiController()).field(FIELD_COMPAT_IDLE).call(METHOD_IS_IDLE_NOW).get()
}
