package com.wix.detox.espresso.action

import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.Base64
import android.view.View
import java.io.ByteArrayOutputStream

class ScreenshotResult(private val bitmap: Bitmap) {
    fun asBitmap() = bitmap
        val bitmap = Bitmap.createBitmap(view.width, view.height, Bitmap.Config.ARGB_8888)
        view.draw(Canvas(bitmap))

        return ScreenshotResult(bitmap)
    }
}
