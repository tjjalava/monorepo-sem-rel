const fs = require('fs')
const path = require('path')

/*
  Updates `package.json` file's 'main' property to point to the bundled code.
  Also removes 'scripts' property.
*/

const rawData = fs.readFileSync(path.resolve('./package.json'))
const packageJson = JSON.parse(rawData)

delete packageJson.scripts
delete packageJson.devDependencies

const modifiedPackageJson = JSON.stringify(packageJson, null, 2)

fs.writeFileSync(path.resolve('./package.json'), modifiedPackageJson)
