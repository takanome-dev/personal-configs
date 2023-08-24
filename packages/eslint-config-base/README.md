# `@takanome-dev/eslint-config-base`

This package contains basic eslint configs for my projects. It's based on the following packages:

- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

The configs defined in this package are extended by my other eslint configs like [@takanome/eslint-config](../eslint-config/README.md).

## 💻 Usage

First, install the package:
  
```bash
npm i -D @takanome-dev/eslint-config-base
```

Then, create a `.eslintrc` file in the root of your project and extend the base config:

```json
{
  "extends": "@takanome-dev/eslint-config-base",
  /// ...
}
```

If you find annoying eslint errors you want to turn off, you can override the rules in your `.eslintrc` file:

```json
{
  "extends": "@takanome-dev/eslint-config-base",
  "rules": {
    "no-unused-vars": "off"
  }
}
```

## ⚖️ License

This project is licensed under the terms of the [MIT license](./LICENSE.md).
