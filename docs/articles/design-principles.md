# Design Principles

Traditionally, end-to-end tests on mobile are riddled with inherent issues, making the testing process difficult and lowering ROI for developers. We believe that the only way to solve these issues at the core is by changing some of the basic principles of our approach.

- **Detox does not rely on [WebDriver](https://www.selenium.dev/documentation/webdriver)** — Detox is built from the ground up to integrate with native layers of your mobile app directly. We try to avoid generic cross-platform interfaces that are often the lowest common denominator. We want to optimize per platform

- **Expectations run on the app, not the tester process** — Traditionally, test frameworks evaluate expectations in the test script, running on Node.js. Detox evaluates expectations directly in the tested app, running on device; this enables operations that were impossible before due to performance reasons
