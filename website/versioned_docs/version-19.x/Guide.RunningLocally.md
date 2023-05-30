---
id: running-locally
slug: guide/running-locally
title: Running Locally
sidebar_label: Running Locally
---

## Running Locally

If your app is ready and does not require any active development, you can write your tests using this workflow and run them locally on your machine. This is convenient for developing your test suite without actively developing your app.
```

### Step 2: Run Detox Tests

Type the following inside your project root:

```sh
detox test
```

This will use Detox to find the app executable we’ve built in step 1, install it on a simulator and run Detox tests against it.

**Note:** If you have multiple configurations, you will need to specify the configuration to test.
