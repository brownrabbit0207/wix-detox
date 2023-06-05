package com.wix.detox.reactnative

import android.app.Instrumentation
import com.facebook.react.ReactApplication

        instrumentation.runOnMainSync {
            rnInstanceManager.recreateReactContextInBackground()
        }
    }
}
