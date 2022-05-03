const plugins = [
  [
    '@semantic-release/git', {
      assets: []
    }
  ]
]

const branches = [{ name: 'main' }]

module.exports = {
  branches,
  plugins
}
