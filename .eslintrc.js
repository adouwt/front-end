// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'indent':['off','tab'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    "no-tabs":"off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关闭语句强制分号结尾
    "semi": [0,';'],
    //空行最多不能超过3行
    "no-multiple-empty-lines": [0, {"max": 3}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": 'off',
    "no-trailing-spaces": 'off'
  }
}