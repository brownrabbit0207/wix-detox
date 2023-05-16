package com.wix.detox.espresso.web;

import androidx.test.espresso.web.model.ElementReference;
import androidx.test.espresso.web.sugar.Web;

import java.util.Collections;

import static androidx.test.espresso.web.assertion.WebViewAssertions.webMatches;
import static androidx.test.espresso.web.webdriver.DriverAtoms.getText;
import static org.hamcrest.CoreMatchers.containsString;
        return webElement.getWebViewInteraction();
    }

    public void toNotExist() {
        webViewInteraction().check(webMatches(webElement.matcherAtom, equalTo(Collections.<ElementReference>emptyList())));
    }

    public void toExist() {
        webViewInteraction().check(webMatches(webElement.matcherAtom, not(equalTo(Collections.<ElementReference>emptyList()))));
    }

    public void toHaveText(String text) {
        webViewInteraction().withElement(webElement.get()).check(webMatches(getText(), containsString(text)));
    }

    public void toNotHaveText(String text) {
        webViewInteraction().withElement(webElement.get()).check(webMatches(getText(), not(containsString(text))));
    }
}