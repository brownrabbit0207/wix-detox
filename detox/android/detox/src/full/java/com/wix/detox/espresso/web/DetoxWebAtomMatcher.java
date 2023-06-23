package com.wix.detox.espresso.web;


import androidx.test.espresso.web.model.Atom;
import androidx.test.espresso.web.model.ElementReference;
import androidx.test.espresso.web.webdriver.Locator;

import java.util.List;

import static androidx.test.espresso.web.webdriver.DriverAtoms.findMultipleElements;

public class DetoxWebAtomMatcher {

    private DetoxWebAtomMatcher() {
        // static class
    }

    public static Atom<List<ElementReference>> matcherForId(String id) {
        return findMultipleElements(Locator.ID, id);
    }

    public static Atom<List<ElementReference>> matcherForClassName(String className) {
        return findMultipleElements(Locator.CLASS_NAME, className);
    }

