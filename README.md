ça-mâche-quoi Front
===========

ça-mâche-quoi front is a React web application in TypeScript.

## Installation

```shell
make install
```

## Development

Start the dev server / watcher:

```shell
make serve
````

Linting:

```shell
make lint
```

## Configuration

The app exposes some configuration variables through env vars.  
By default, it loads vars from env files depending on the context, in the
following order:

1. `.env`
1. `.env.local`
1. `.env.{production,staging,development}`
1. `.env.{production,staging,development}.local`

Last defined value wins. Actual env var always wins.

> **Note**:
> You can also load another specific env file determined by the `ENV_FILE` var, for instance:
>
>     ENV_FILE=.env.production make serve

To add new configuration variables, add these to the main `.env` file
and provide a development value (if relevent) in the `.env.development` file.

## Build

Build for production using:

```shell
make build@production
```

Build for staging using:

```shell
make build@staging
```

## Serve

Serve a build:

```shell
make serve.static
```

## Going further

- [Assets](res/doc/assets.md)
- [Routes](res/doc/routes.md)

## References

- [TypeScript](https://www.typescriptlang.org/)
- [TypeScript Cheatscheet](https://react-typescript-cheatsheet.netlify.app/)
- [Apollo GraphQL Client](https://www.apollographql.com/docs/react/)
- [Using Apollo with TypeScript](https://www.apollographql.com/docs/react/development-testing/static-typing/)

---  
⬆︎ [**Back to README.md**](../README.md)  
