
// const _config = require('./config')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: _config.getOutPutPath(),
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('constant', resolve('src/constant'))
      .set('layout', resolve('src/views'))
      // .set('utils', resolve('src/utils'))
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false
  }
}
