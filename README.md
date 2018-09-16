# nuxt-brotli

> This [Nuxt.js](https://github.com/nuxt) module compresses assets with Brotli compression algorithm using [iltorb](https://github.com/MayhemYDG/iltorb) library for serving it with [ngx_brotli](https://github.com/google/ngx_brotli).

## Installation

```bash
$ npm i nuxt-brotli
```

## Usage

Add ```nuxt-brotli``` to modules section of ```nuxt.config.js```

```javascript
{
  modules: ['nuxt-brotli']
}
```

Arguments:

* `asset`: The target asset name. Defaults to `'[path].br[query]'`.
  * `[file]` is replaced with the original asset file name.
  * `[fileWithoutExt]` is replaced with the file name minus its extension, e.g. the `style` of `style.css`.
  * `[ext]` is replaced with the file name extension, e.g. the `css` of `style.css`.
  * `[path]` is replaced with the path of the original asset.
  * `[query]` is replaced with the query.
* `test`: All assets matching this RegExp are processed. Defaults to ```/\.(js|css|html|svg)$/```.
* `threshold`: Only assets bigger than this size (in bytes) are processed. Defaults to `0`.
* `minRatio`: Only assets that compress better that this ratio are processed. Defaults to `0.8`.
* `deleteOriginalAssets`: remove original files that were compressed with brotli. Default: false

Optional arguments for Brotli (see [iltorb](https://github.com/MayhemYDG/iltorb#brotliencodeparams) doc for details):
* `mode`: Default: 0,
* `quality`: Default: 11,
* `lgwin`: Default: 22,
* `lgblock`: Default: 0,
* `size_hint`: Default: 0,
* `disable_literal_context_modeling`: Default: false

# License

[Nuxt.js](https://github.com/nuxt)

[iltorb](https://github.com/MayhemYDG/iltorb)

[brotli plugin for webpack](https://github.com/mynameiswhm/brotli-webpack-plugin)

[MIT](https://opensource.org/licenses/MIT)
