# Mocking Open With URL (Deep Links)

<!-- markdownlint-configure-file { "header-increment": 0 } -->

You can mock opening the app from URL to test your app’s deep link handling mechanism.

### Mocking App Launch With a URL

```js
await device.launchApp({newInstance: true, url, sourceApp: bundleId}); // sourceApp is an optional iOS-only argument
```

#### Example

```js
```js
await device.openURL({url: 'scheme://some.url', sourceApp: 'com.apple.mobilesafari'});
```
