# `@takanome/eslint-config`

This package contains eslint configs for my projects that use Next.js. It's based on the following packages:

- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
- [@takanome/eslint-config-typescript](https://www.npmjs.com/package/@takanome/eslint-config-typescript)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

These configs can be used for Next.js projects that use TypeScript as well as React.

## 💻 Usage

First, install the package:
  
```bash
npm i -D @takanome/eslint-config
```

Then, create a `.eslintrc` file in the root of your project and extend the base config:

```json
{
  "extends": "@takanome/eslint-config",
  /// ...
}
```

If you found annoying eslint errors you want to turn off, you can override the rules in your `.eslintrc` file:

```json
{
  "extends": "@takanome/eslint-config",
  "rules": {
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

## ⚖️ License

This project is licensed under the terms of the [MIT license](./LICENSE.md).
