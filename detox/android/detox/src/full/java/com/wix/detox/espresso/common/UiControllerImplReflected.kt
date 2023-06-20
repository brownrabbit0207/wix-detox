package com.wix.detox.espresso.common

import com.wix.detox.espresso.action.common.utils.getUiController
import org.joor.Reflect

private const val FIELD_ASYNC_IDLE = "asyncIdle"
private const val FIELD_COMPAT_IDLE = "compatIdle"
private const val METHOD_IS_IDLE_NOW = "isIdleNow"

class UiControllerImplReflected {
