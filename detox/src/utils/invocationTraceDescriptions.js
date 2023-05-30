module.exports = {
  actionDescription: {
    adjustSliderToPosition: (newPosition) => `adjust slider to position ${newPosition}`,
    clearText: () => 'clear input text',
    getAttributes: () => 'get element attributes',
    longPress: (duration) => `long press${duration !== undefined ? ` for ${duration}ms` : ''}`,
    longPressAndDrag: (duration, startX, startY, targetElement, endX, endY, speed, holdDuration) =>
      `long press and drag from ${startX}, ${startY} to ${endX}, ${endY} with speed ${speed} and hold duration ${holdDuration}`,
    multiTap: (times) => `tap ${times} times`,
    performAccessibilityAction: (actionName) => `perform ${actionName} accessibilityAction`,
      ${!isNaN(normalizedStartingPointX) && !isNaN(normalizedStartingPointY) ? ` from normalized position (${normalizedStartingPointX}, ${normalizedStartingPointY})` : ''}`,
    takeScreenshot: (screenshotName) => `take screenshot${screenshotName !== undefined ? ` with name "${screenshotName}"` : ''}`,
    tapAtPoint: (value) => `tap${value !== undefined ? ` at ${JSON.stringify(value)}` : ''}`,
    tapBackspaceKey: () => 'tap on backspace key',
    tapReturnKey: () => 'tap on return key',
    typeText: (value) => `type input text: "${value}"`,
  },
  expectDescription: {
    waitFor: (actionDescription) => `wait for expectation while ${actionDescription}`,
    waitForWithTimeout: (expectDescription, timeout) => `${expectDescription} with timeout (${timeout} ms)`,
    withTimeout: (timeout) => `wait until timeout (${timeout} ms)`,
    toBeFocused: () => 'to be focused',
    toBeVisible: (percent) => `to be visible${percent !== undefined ? ` ${percent}%` : ''}`,
    toExist: () => 'to exist',
    toHaveText: (text) => `to have text: "${text}"`,
    toHaveLabel: (label) => `to have label: "${label}"`,
    toHaveId: (id) => `to have id: "${id}"`,
    toHaveValue: (value) => `to have value: "${value}"`,
    toHaveSliderPosition: (position, tolerance) => `to have slider position: ${position}${tolerance > 0 ? ` with tolerance ${tolerance}` : ''}`,
    toHaveToggleValue: (value) => `to have toggle value: ${value}`,
    full: (expectDescription, notCondition) => `expect element ${notCondition ? `not ${expectDescription}` : expectDescription}`
  }
};
