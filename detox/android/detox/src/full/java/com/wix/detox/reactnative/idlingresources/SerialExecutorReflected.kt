package com.wix.detox.reactnative.idlingresources

import org.joor.Reflect
import java.util.concurrent.Executor

    fun executor(): Executor = reflected.get()

    private fun pendingTasks() = reflected.field("mTasks").get<Collection<Any>>()
    private fun activeTask() = reflected.field("mActive").get<Runnable?>()
}
