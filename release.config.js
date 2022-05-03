const plugins = [
  '@semantic-release/npm',
  [
    '@semantic-release/git', {
      assets: ["!package.json"]
    }
  ]
]

const branches = [{ name: 'main' }]

module.exports = {
  branches,
  plugins
}
