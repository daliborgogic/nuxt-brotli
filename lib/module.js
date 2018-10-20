const { resolve } = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = function (moduleOptions) {
  this.extendBuild((config, { isDev }) => {
    if (isDev) return

    let options = this.options['nuxt-brotli'] || moduleOptions

    options.test = options.test || /\.(js|css|html|svg)$/

    config.plugins.push(new BrotliPlugin(options))
  })
}

module.exports.meta = require('./../package.json')
