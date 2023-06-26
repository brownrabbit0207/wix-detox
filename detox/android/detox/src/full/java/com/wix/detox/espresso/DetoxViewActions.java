package com.wix.detox.espresso;

import com.wix.detox.espresso.action.DetoxTypeTextAction;
import com.wix.detox.espresso.action.RNClickAction;

 * An alternative to {@link ViewActions} - providing alternative implementations, where needed.
 */
public class DetoxViewActions {
    public static ViewAction click() {
        return actionWithAssertions(new RNClickAction());
    }

    public static ViewAction typeText(String text) {
        return actionWithAssertions(new DetoxTypeTextAction(text));
    }
}
