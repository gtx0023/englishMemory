module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  ignorePatterns: [
    'node_modules/',
    '.eslintrc.js',
    'jest.config.ts',
    'vue.config.js',
    'build-lib.js',
    'mock/',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    '@typescript-eslint/naming-convention': 1,
    '@typescript-eslint/ban-ts-comment': 1,

    /**
     * 支持尖括号类型断言
     */
    '@typescript-eslint/consistent-type-assertions': 0,

    /**
     * @description: 检测未使用的变量
     */
    '@typescript-eslint/no-unused-vars': 1,
    'no-var': 0,

    /**
     * 是否需要推断类型
     */
    '@typescript-eslint/no-inferrable-types': 1,

    /**
     * @description: 单引号
     */
    quotes: ['error', 'single'],

    /**
     * @description: 全等
     */
    eqeqeq: 2,

    /**
     * @description: 禁止无效的this，只能用在构造器，类，对象字面量
     */
    'no-invalid-this': 1,

    /**
     * @description: 禁止使用逗号运算符
     */
    'no-sequences': 0,

    /**
     * @description: 函数需要返回值
     */
    '@typescript-eslint/explicit-function-return-type': 0,
    // 禁止使用v-html命令
    'vue/no-v-html': 2,
    /**
     * @description: this使用规则
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self', '_this'] // Allow `const self = this`; `[]` by default
      }
    ],
    'no-else-return': [1, { allowElseIf: true }], // 允许返回后的else if块
    'vue/no-parsing-error': 2, // 暂时屏蔽因为i18N在代码中因为符号报错问题。由error 改为 提示
    'no-useless-escape': 1, // 屏蔽正则表达式中转义符提示错误问题
    '@typescript-eslint/no-explicit-any': 1,
    // 当注册没有被使用的组件
    'vue/no-unused-components': 1,
    'multiline-comment-style': 2,
    'lines-around-comment': 2,
    'max-len': ['error', { code: 120 }],
    'no-useless-return': 2,
    'spaced-comment': 2,
    'prefer-promise-reject-errors': 1,
    camelcase: 1,
    'max-lines-per-function': 1
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
        'src/**/*.vue'
      ],
      rules: {
        'max-lines-per-function': 0
      },
      env: {
        jest: true,
      },
    },
  ],
};
