package com.wix.detox

import android.util.Log
import com.wix.detox.adapters.server.OutboundServerAdapter

            outboundServerAdapter.sendMessage(ACTION_NAME, crashInfo, MESSAGE_ID)
        }
    }

    companion object {
        private val LOG_TAG: String = DetoxCrashHandler::class.java.simpleName

        private const val ACTION_NAME = "AppWillTerminateWithError"
        private const val MESSAGE_ID = -10000L
    }
}
