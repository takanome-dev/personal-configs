module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "@takanome/eslint-config-typescript",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["react-hooks", "prettier-plugin-tailwindcss"],
  rules: {
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
