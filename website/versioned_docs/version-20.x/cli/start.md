# detox start

`detox start [options]`

Runs the [`start` command](../config/apps.mdx#properties) of the app (or apps)
from the specified [configuration](../config/overview.mdx#config-structure).

| Option                                | Description                                                                                                                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -C, --config-path `<configPath>`      | Specify Detox config file path. If not supplied, Detox searches for .detoxrc\[.js] or "detox" section in package.json.                                                                   |

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
