// umi-fabric 一个包含prettier，eslint，stylelint的合集，用以在umi项目中对代码添加规范
// 配置参考 https://www.jianshu.com/p/634241931541
//         https://github.com/umijs/fabric
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
};
