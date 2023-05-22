package com.wix.detox.config

import androidx.test.espresso.IdlingPolicies
import java.util.concurrent.TimeUnit

class DetoxIdlePolicyConfig {
    /** Directly binds to [IdlingPolicies.setMasterPolicyTimeout]. Applied in seconds.  */
    @JvmField var masterTimeoutSec = 240

    /** Directly binds to [IdlingPolicies.setIdlingResourceTimeout]. Applied in seconds.  */
    @JvmField var idleResourceTimeoutSec = 180

    fun apply() {
        IdlingPolicies.setMasterPolicyTimeout(masterTimeoutSec.toLong(), TimeUnit.SECONDS)
        IdlingPolicies.setIdlingResourceTimeout(idleResourceTimeoutSec.toLong(), TimeUnit.SECONDS)
    }
}
