export default (memo, { env, webpack, createCSSRule }) => {
  console.log(memo, '当前webpack-chain对象');
  console.log(env, '当前环境，development、production 或 test 等');
  console.log(webpack, 'webpack 实例，用于获取其内部插件');
  console.log(createCSSRule, '用于扩展其他 CSS 实现，比如 sass, stylus');
};
