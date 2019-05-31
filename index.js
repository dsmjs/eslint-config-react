module.exports = {
  extends: '@form8ion/react',

  overrides: {
    files: '.storybook/*.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
  }
};
