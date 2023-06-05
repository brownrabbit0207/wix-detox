package com.wix.detox.espresso.matcher

import android.view.View
import com.wix.detox.reactnative.ui.getAccessibilityLabel
import org.hamcrest.Description
            return textMatcher.matches(contentDescription).also { matched ->
                if (!matched) {
                    mismatchDescription.appendText("view.getAccessibilityLabel() ")
                    textMatcher.describeMismatch(contentDescription, mismatchDescription)
                }
            }
        }

    override fun describeTo(description: Description) {
        description.appendText("view.getAccessibilityLabel() ").appendDescriptionOf(textMatcher)
    }
}
