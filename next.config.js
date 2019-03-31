const withCSS = require('./next-css')

const dev = process.env.NODE_ENV !== 'production'

module.exports = withCSS({
  cssLoaderOptions: {
    modules: true,
    localIdentName: dev ? '[local]___[hash:base64:5]' : '[hash:base64:5]',
  },
})
