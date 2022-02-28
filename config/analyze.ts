export default {
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyzerMode: 'server',
  analyzerPort: 8888,
  openAnalyzer: true,
  // generate stats file while ANALYZE_DUMP exist
  generateStatsFile: false,
  statsFilename: 'stats.json',
  logLevel: 'info',
  defaultSizes: 'parsed', // stat  // gzip
};
