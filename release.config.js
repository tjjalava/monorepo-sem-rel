const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
  '@semantic-release/npm',
  [
    '@semantic-release/git', {
      assets: ['CHANGELOG.md', '!package.json']
    }
  ]
]

const branches = [{ name: 'main' }]

module.exports = {
  branches,
  plugins
}
