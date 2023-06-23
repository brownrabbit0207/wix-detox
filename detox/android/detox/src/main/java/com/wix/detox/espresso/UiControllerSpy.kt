
package com.wix.detox.espresso

import androidx.test.espresso.UiController
import com.wix.detox.common.proxy.CallInfo
import com.wix.detox.common.proxy.SpyingInvocationHandler
import com.wix.detox.common.proxy.MethodsSpy
import com.wix.detox.espresso.action.common.utils.getUiController
import org.joor.Reflect

class UiControllerSpy: MethodsSpy("uiController") {
    fun eventInjectionsIterator(): Iterator<CallInfo?> = historyOf("injectMotionEvent").iterator()

    companion object {
        @JvmStatic
        val instance = UiControllerSpy()

        @JvmStatic
        @JvmOverloads
        fun attachThroughProxy(spy: UiControllerSpy = instance) {
            val eventsInjectorReflected = EventsInjectorReflected(getUiController())

            val eventsInjectionStrategy = eventsInjectorReflected.eventsInjectionStrategy!!
            val eventsInjectionStrategyProxy = SpyingInvocationHandler.newInstance(eventsInjectionStrategy, spy)

