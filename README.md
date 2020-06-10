# Hello World Superset Example Plugin

This project is meant to be used as a template to create your own Chart Plugins for Superset.

## Initializing Your Own Plugin

For now, you can fork this project to get started. Delete the `.git` folder and run `git init` if you want a clean commit history.

In the future we plan on adding a Yeoman script, and potentially moving portions of this code into a library to make plugin development simpler.

## Developing Your Plugin

To build the plugin:

```shell
npm install
npm run build-dev
```

To serve the built assets so that you can test it out on a locally-running Superset:

```shell
npm run serve-dev
```

To build for production:

```shell
npm run build-prod
```
