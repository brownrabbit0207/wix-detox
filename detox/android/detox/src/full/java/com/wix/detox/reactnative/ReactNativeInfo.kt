package com.wix.detox.reactnative

import org.joor.Reflect
import java.util.Map

                val versionMap: Map<String, Int> = Reflect.on(versionClass).field("VERSION").get()
                RNVersion(versionMap.get("major")!!, versionMap.get("minor")!!, versionMap.get("patch")!!)
            } catch (e: ClassNotFoundException) {
                // ReactNativeVersion was introduced in RN50, default to latest previous version.
                RNVersion(0, 49, 0)
            }

    @JvmStatic
    fun rnVersion() = rnVersion

    fun isReactNativeApp(): Boolean = try {
        Class.forName("com.facebook.react.ReactApplication")
        true
    } catch (e: ClassNotFoundException) {
        false
    }
}
