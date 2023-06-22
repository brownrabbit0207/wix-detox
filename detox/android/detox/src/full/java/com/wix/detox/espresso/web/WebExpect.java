package com.wix.detox.espresso.web;

import androidx.test.espresso.web.model.ElementReference;
import androidx.test.espresso.web.sugar.Web;

import java.util.Collections;

import static androidx.test.espresso.web.assertion.WebViewAssertions.webMatches;
import static androidx.test.espresso.web.webdriver.DriverAtoms.getText;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.not;

public class WebExpect {
    final WebElement webElement;

    WebExpect(WebElement webElement) {
        this.webElement = webElement;
    }

