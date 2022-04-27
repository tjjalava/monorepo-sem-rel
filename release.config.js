const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/npm',
  '@semantic-release/git'
]

const branches = [{ name: 'main' }]

module.exports = {
  branches,
  plugins
}
