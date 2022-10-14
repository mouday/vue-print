// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-print/' : '/',

  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  },

  chainWebpack: (config) => {
    // twig rule loader
    const twigRule = config.module.rule('twig')
    twigRule.exclude.add(/node_modules/)
    // 添加新的loader处理
    twigRule
      .test(/\.twig$/)
      .use('twig-loader')
      .loader('twig-loader')
      .end()
  },
}
