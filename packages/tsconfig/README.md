# `@takanome/tsconfig-base`

This package contains 3 tsconfig files which are used in my projects:

- `base.json` which is the base config for all other configs
- `server.json` which is the config for server side code (NestJS)
- `nextjs.json` which is the config for client side code (NextJS)

## 💻 Usage

First, install the package:

```bash
npm i -D @takanome/tsconfig
```

Then, create a `tsconfig.json` file in the root of your project and extend the base config:

```json
{
  "extends": "@takanome/tsconfig/base.json"
  /// ...
}
```

If you are using NestJS, you can extend the server config:

```json
{
  "extends": "@takanome/tsconfig/server.json"
  /// ...
}
```

If you are using NextJS, you can extend the client config:

```json
{
  "extends": "@takanome/tsconfig/nextjs.json"
  /// ...
}
```

## ⚖️ License

This project is licensed under the terms of the [MIT license](./LICENSE.md).
