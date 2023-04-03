const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器，指向开发环境 API 服务器的字符串：(方式1)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 更灵活。 (方式2 http-proxy-middleware)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api' : ''}, // 重写路径，把api转为''
        // ws: true, 支持websocket
        // changeOrigin: true // 用于控制请求头中host的值
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}