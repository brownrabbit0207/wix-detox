# detox start

`detox start [options]`

Runs the [`start` command](../config/apps.mdx#properties) of the app (or apps)
| -f, --force                           | Ignore errors from the "start" scripts and continue.                                                                                                                                     |
| --help                                | Show help                                                                                                                                                                                |

## Examples

If you have only one configuration, you can simply use:

```bash
detox start
```

To choose a specific configuration:

```bash
# long alias:
detox start --configuration yourConfiguration
# short alias:
detox start -c yourConfiguration
```

To forward extra arguments to the "start" script, e.g.:

```bash
detox start -c yourConfiguration -- --port 8082
```

To ignore errors from the "start" scripts and continue:

```bash
detox start -c yourConfiguration --force
```
