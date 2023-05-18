package com.wix.detox.common

import android.os.Bundle
import org.json.JSONArray
import org.json.JSONObject

internal class JsonConverter(private val json: JSONObject) {
    fun toBundle(): Bundle {
        val bundle = Bundle()
        json.keys().forEach { key: String ->
            when (val value = json.get(key)) {
                is Boolean -> bundle.putBoolean(key, value)
                is Integer -> bundle.putInt(key, value as Int)
                is java.lang.Long -> bundle.putLong(key, value as Long)
                is java.lang.Double -> bundle.putDouble(key, value as Double)
                is String -> bundle.putString(key, value)
                is JSONObject -> {
                    val subObject = json.getJSONObject(key)
                    val subBundle = JsonConverter(subObject).toBundle()
                    bundle.putBundle(key, subBundle)
