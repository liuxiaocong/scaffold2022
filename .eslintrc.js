const path = require("path");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
  },
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks"],
  ignorePatterns: [
    ".eslintrc.js",
    "build",
    "configs",
    "coverage",
    "public",
    "scripts",
    "dist"
  ],
  plugins: ["@typescript-eslint", "import", "jsx-a11y", "react", "react-hooks"],
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.json"),
  },
  rules: {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "default-param-last": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    // Consistent indent settings
    indent: ["error", 4, { SwitchCase: 1 }],
    "linebreak-style": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "max-classes-per-file": "off",
    "max-len": "off",
    "no-continue": "off",
    "no-else-return": "off",
    // For immer package
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": "off",
    // From: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-base-v15.0.0/packages/eslint-config-airbnb-base/rules/es6.js#L65
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: [
          "then", // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ],
      },
    ],
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    // Only enable object variable declarator.
    // From: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-base-v15.0.0/packages/eslint-config-airbnb-base/rules/es6.js#L123
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    "prefer-promise-reject-errors": "off",
    // Spreading arguments is needed when some arguments are accessed within func body
    "prefer-rest-params": "off",
    "spaced-comment": "off",
    // Prevent error page in dev env
    "no-empty": ["error", { allowEmptyCatch: true }],

    // Disabled for better code comments
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/default-param-last": "warn",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#the-indent--typescript-eslintindent-rules
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/lines-between-class-members": "off",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "accessor", format: ["camelCase"] },
      { selector: "class", format: ["PascalCase"] },
      {
        selector: "enum",
        // `UPPER_CASE` for constant enums.
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "enumMember",
        // `UPPER_CASE` for constant enum members.
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        // `PascalCase` for react function components.
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      { selector: "method", format: ["camelCase"], leadingUnderscore: "allow" },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "objectLiteralProperty",
        // See https://git.garena.com/shopee/isfe/DSFE/style-guides/-/blob/master/packages/eslint-config-infra-typescript/naming.js
        format: null,
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      { selector: "typeParameter", format: ["PascalCase"] },
      {
        selector: "variable",
        format: ["camelCase", "snake_case", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",

    "import/no-deprecated": "off",
    // Disabled for import-statement of dev dependencies.
    "import/no-extraneous-dependencies": "off",
    // Not needed as explained in:
    // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    "import/no-named-as-default": "off",
    // According to https://github.com/facebook/create-react-app/blob/v4.0.3/packages/react-scripts/config/modules.js#L22
    // Additional modules will be added into webpack configuration option `resolve.modules` for
    // we set `baseUrl` to `src` in jsconfig.json, so we can use absolute imports to import our
    // own code to avoid too long relative imports.
    // This also means that absolute imports are no longer always go to node_modules, therefore
    // this rule is disabled to do not keep import order.
    "import/order": "off",
    "import/prefer-default-export": "off",

    // Allows <a href="#"></a>
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-ally/href-no-hash": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",

    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/function-component-definition": "off",
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-filename-extension": "off",
    // From: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L518
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-did-update-set-state": "off",
    "react/no-unstable-nested-components": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-unused-class-component-methods": "warn",
    // From: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L354
    "react/no-unused-prop-types": [
      "warn",
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    "react/prefer-stateless-function": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.30.0/docs/rules/react-in-jsx-scope.md
    // Disable this rule for using new JSX transform from React 16.14.0.
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/sort-comp": "off",
    "react/static-property-placement": "off",
    "react/jsx-curly-newline": "off",

    // From: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-hooks.js#L19
    // Currently we don't follow this rule strictly, so set it to `warn`.
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "use[a-zA-Z]+Effect" },
    ],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn"
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        camelcase: "warn",
        "no-unused-vars": "error",
        // Semicolons are not required
        semi: ["error", "never"],
        "space-infix-ops": "error",

        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/space-infix-ops": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
    {
      files: ["*.spec.ts", "*.test.ts"],
      rules: {
        // In unit tests, sometimes we want to access private/protected properties for testing
        "@typescript-eslint/dot-notation": [
          "error",
          {
            allowPrivateClassPropertyAccess: true,
            allowProtectedClassPropertyAccess: true,
            allowIndexSignaturePropertyAccess: true,
          },
        ],
      },
    },
  ],
};
