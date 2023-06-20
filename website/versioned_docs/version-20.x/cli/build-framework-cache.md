# detox build-framework-cache

```bash
detox build-framework-cache
```

**MacOS only.** Builds a cached version of `Detox.framework` in `~/Library/Detox/ios/*`.

Detox stores a cached version of its framework in `~/Library/Detox/ios/*` in unique folders, where the folder name
is a hash of Xcode and Detox version:
