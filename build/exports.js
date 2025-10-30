const fs = require('fs')

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

pkg.exports = {
  '.': {
    require: './dayjs.min.js',
    import: './esm/index.js',
    types: './index.d.ts'
  }
}

fs.readdirSync('locale').forEach((file) => {
  if (!file.endsWith('.js')) return
  pkg.exports[`./locale/${file.replace('.js', '')}`] = {
    require: `./locale/${file}`,
    import: `./esm/locale/${file}`,
    types: './locale/types.d.ts'
  }
  pkg.exports[`./esm/locale/${file.replace('.js', '')}`] = pkg.exports[`./locale/${file.replace('.js', '')}`]
})

fs.readdirSync('plugin').forEach((file) => {
  if (!file.endsWith('.js')) return
  pkg.exports[`./plugin/${file.replace('.js', '')}`] = {
    require: `./plugin/${file}`,
    import: `./esm/plugin/${file}`,
    types: `./plugin/${file.replace('.js', '.d.ts')}`
  }
  pkg.exports[`./esm/plugin/${file.replace('.js', '')}`] = pkg.exports[`./plugin/${file.replace('.js', '')}`]
})

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf-8')
