module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'jest',
  ],
  rules: {
    'max-len': ['error',
      {
        code: 120,
        ignorePattern: 'd="([\\s\\S]*?)"',
      }],
    'vue/max-len': ['error', {
      code: 120,
      template: 100,
      ignorePattern: 'd="([\\s\\S]*?)"',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'import/no-unresolved': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 'off',
    'arrow-parens': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-deprecated-router-link-tag-prop': 'off',
    'nuxt/no-env-in-hooks': 'off',
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
