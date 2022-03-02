import analyze from './analyze';
import { defineConfig } from 'umi';
import routes from './routes';

// import chainWebpack from './plugins'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  analyze,
  routes,
  base: '/',
  // chainWebpack,
  // chunks: ['umi'], // 做分包处理，详情请查询https://umijs.org/zh-CN/config#chunks
  // cssLoader:{
  //   // localsConvention:'camelCase' // 将className名转为驼峰形式
  // },
  // cssModulesTypescriptLoader: {}, 自动为引入的css 或 less 文件生成对应的ts类型文件

  // devServer:{  // 开发环境服务器
  //   port:8000,
  //   host:'127.0.0.1',
  //   https:true 是否开启https server，同时也会开启HTTP/2
  // }
  // devtool:'cheap-module-source-map' // 配置sourceMap
  dynamicImportSyntax: {}, // 支持代码中使用import() 语法的 code split

  // 设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用，例如一些当某些cdn资源为加载时，可以通过此加载埋点上报的文件
  // externals:{
  //   xxx:"Window.xxx"  xxx 表示import a from 'xxx'
  // },
  // scripts:[引入的cdn路径]
  // headScripts:[] // 放在模板文件的head标签中

  // favicon:'' ,// 配置favicon地址（href），本地图片需放入public中
  // forkTSChecker:{} 开启TypeScript编译时检查
  // fastRefresh:{},  // 开发时可以保持组件状态，同时编辑提供即时反馈，有点类似双向数据绑定
  hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  // ignoreMomentLocale:true // 忽略 moment 的 locale 文件，用于减少尺寸。 或者使用dayjs替代
  // inlineLimit:10000 // 配置图片文件是否走 base64 编译的阈值，默认为10K
  // lessLoader:{},
  // metas:[] // 配置额外meta 参考 https://umijs.org/zh-CN/config#metas
  outputPath: 'dist', // 输出指定目录
  // plugins:[], // 配置额外的插件
  // postcssLoader:{} // postcss-loader
  publicPath: '/', // 静态文件访问地址
  // targets: {
  //   ie: 11,
  //   chrome: 90,
  // },
});
