package com.wix.detox.espresso.matcher

import android.view.View
import org.hamcrest.BaseMatcher
import org.hamcrest.Description
    override fun matches(item: Any): Boolean {
        if (!innerMatcher.matches(item) || foundMatch) return false

        if (count == index) {
            foundMatch = true
            return true
        }
        ++count
        return false
    }

    override fun describeTo(description: Description) {
        description.appendText("View at index #$index, of those matching MATCHER$innerMatcher")
    }
}
