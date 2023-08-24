# `@takanome-dev/eslint-config-typescript`

This package contains eslint configs for my projects that use TypeScript. It's based on the following packages:

- [@takanome-dev/eslint-config-base](https://www.npmjs.com/package/@takanome-dev/eslint-config-base)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

These are TypeScript-specific configs that are not included in the base config.

## 💻 Usage

First, install the package:
  
```bash
npm i -D @takanome-dev/eslint-config-typescript
```

Then, create a `.eslintrc` file in the root of your project and extend the base config:

```json
{
  "extends": "@takanome-dev/eslint-config-typescript",
  /// ...
}
```

If you find annoying eslint errors you want to turn off, you can override the rules in your `.eslintrc` file:

```json
{
  "extends": "@takanome-dev/eslint-config-typescript",
  "rules": {
    "no-console": "off"
  }
}
```

## ⚖️ License

This project is licensed under the terms of the [MIT license](./LICENSE.md).
