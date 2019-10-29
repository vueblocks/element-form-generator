const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 修改默认目录简写
  config.resolve.alias.set('@', path.resolve('src'))
  if (isProd) {
    /**
     * 清除性能警告
     * entrypoint size limit (244 KiB)
     * asset size limit (244 KiB)
     */
    config.performance
      .set('maxEntrypointSize', 2500000)
      .set('maxAssetSize', 2000000)
    // 压缩代码
    config.optimization.minimize(true)
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}

const setConfigureWebpack = config => {
  return {}
}

module.exports = {
  publicPath: './',
  outputDir: resolve('../docs'),
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 4455,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
