package com.wix.detox.adapters.server

import android.util.Log
import com.wix.detox.common.DetoxLog

interface OutboundServerAdapter {
    fun sendMessage(type: String, payload: Map<String, Any?>, id: Long)
}

class DetoxServerAdapter(
    }

    fun teardown() {
        wsClient.close()
    }

    override fun onConnect() {
        Log.i(DetoxLog.LOG_TAG, "Connected to server!")
        actionsDispatcher.dispatchAction(readyActionType, "", -1000L)
    }

    override fun onClosed() {
        Log.i(DetoxLog.LOG_TAG, "Disconnected from server")
        actionsDispatcher.dispatchAction(terminationActionType, "", 0)
    }

    override fun onAction(type: String, params: String, messageId: Long) {
        actionsDispatcher.dispatchAction(type, params, messageId)
    }

    override fun sendMessage(type: String, payload: Map<String, Any?>, id: Long)
            = wsClient.sendAction(type, payload, id)
}
