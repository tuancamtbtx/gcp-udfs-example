module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'dist.js'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
