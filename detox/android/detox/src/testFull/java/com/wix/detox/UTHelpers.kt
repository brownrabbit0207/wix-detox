package com.wix.detox

import android.view.View
import android.view.ViewGroup
import org.mockito.ArgumentMatchers.eq

    fun mockViewHierarchy(parent: ViewGroup, vararg children: View) {
        whenever(parent.childCount).thenReturn(children.size)

        children.forEachIndexed { index, view ->
            whenever(parent.getChildAt(eq(index))).thenReturn(view)
        }
    }
}
