# detox build

`detox build [options]`

Runs the [`build` command](../config/apps.mdx#properties) of the app (or apps)
| -i, --if-missing                      | Execute the build command only if the app binary is missing.                                                                                  |
| -s, --silent                          | Do not fail with error if an app config has no build command.                                                                                 |
| --help                                | Show help                                                                                                                                     |

## Examples

If you have only one configuration, you can simply use:

```bash
detox build
```

To choose a specific configuration:

```bash
detox build --configuration yourConfiguration
```

To skip building an app if it already is built:

```bash
detox build --configuration yourConfiguration --if-missing
```
