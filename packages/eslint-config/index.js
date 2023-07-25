export default {
  env: {
    es2020: true,
    node: true,
  },
  extends: ["airbnb/hooks", "@takanome/eslint-config-typescript"],
  plugins: ["react-hooks"],
  rules: {
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
