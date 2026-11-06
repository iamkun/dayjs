const fs = require('fs')
const path = require('path')

const lockfile = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package-lock.json'), 'utf8'))

const patchedVersions = [
  ['node_modules/karma', '6.4.4'],
  ['node_modules/semver', '6.3.1'],
  ['node_modules/rollup', '2.80.0'],
  ['node_modules/moment', '2.31.0']
]

const isAtLeast = (version, minimum) => {
  const actualParts = version.split('.').map(Number)
  const minimumParts = minimum.split('.').map(Number)

  for (let index = 0; index < minimumParts.length; index += 1) {
    if (actualParts[index] > minimumParts[index]) return true
    if (actualParts[index] < minimumParts[index]) return false
  }

  return true
}

test('#3225 patched development dependency versions', () => {
  const outdated = patchedVersions.filter(([packagePath, minimum]) => {
    const entry = lockfile.packages[packagePath]
    return !entry || !isAtLeast(entry.version, minimum)
  })

  expect(outdated).toEqual([])
})
