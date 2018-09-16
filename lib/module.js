const { resolve } = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = function (moduleOptions) {

  this.extendBuild((config) => {
    let options = this.options['nuxt-brotli'] || moduleOptions

    options.asset = options.asset || '[path].br[query]'
    options.test = options.test || /\.(js|css|html|svg)$/
    options.threshold =options.threshold || 0
    options.minRatio = options.minRatio || 0.8

    config.plugins.push(new BrotliPlugin(options))
  })
}

module.exports.meta = require('./../package.json')