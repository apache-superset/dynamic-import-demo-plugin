# Dynamic Imports Example Plugin

**Attention: Dynamic plugins are a work-in-progress feature. Please do try it out and give feedback, but use only at your own risk!**

This project is meant to be used as a template to create your own Chart Plugins for Superset.

## Initializing Your Own Plugin

For now, you can fork this project to get started. Delete the `.git` folder and run `git init` if you want a clean commit history.

In the future we plan on adding a Yeoman script, and potentially moving portions of this code into a library to make plugin development simpler.

## Developing Your Plugin

To build the plugin:

```shell
npm install
npm run build # or npm run build:watch
```

Superset will need to load your built plugin bundle from somewhere. You can serve the plugin locally using the following command:

```shell
npm run serve
```

While serving up the local plugin, you can add it to your locally running Superset instance under "Custom Plugins". Make sure the `DYNAMIC_PLUGINS` feature flag is on in Superset. Use the the locally hosted bundle url `http://127.0.0.1:8080/main.js` when configuring your plugin.

To build for production:

```shell
npm run build-prod
```

The `serve` command should only be used for local development. In production, it is recommended to host the bundle output of `build` (located in `/dist`) on a CDN. The address of the CDN-hosted bundle is then what should be used when adding the plugin to Superset.
