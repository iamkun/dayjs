const fs = require('node:fs')
const util = require('node:util')
const path = require('node:path')
const rollup = require('rollup')
const { ncp } = require('ncp')
const configFactory = require('./rollup.config')

const { promisify } = util

const promisifyReadDir = promisify(fs.readdir)
const promisifyReadFile = promisify(fs.readFile)
const promisifyWriteFile = promisify(fs.writeFile)

const localeNameRegex = /\/\/ (.*) \[/
const formatName = (n) => n.replace(/\.js/, '').replace('-', '_')

const localePath = path.join(__dirname, '../src/locale')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

async function listLocaleJson(localeArr) {
  const localeListArr = []
  await Promise.all(
    localeArr.map(async (l) => {
      const localeData = await promisifyReadFile(
        path.join(localePath, l),
        'utf-8'
      )
      localeListArr.push({
        key: l.slice(0, -3),
        name: localeData.match(localeNameRegex)[1],
      })
    })
  )
  promisifyWriteFile(
    path.join(__dirname, '../dist/locale.json'),
    JSON.stringify(localeListArr),
    'utf8'
  )
}

;(async () => {
  try {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    // We use await-in-loop to make rollup run sequentially to save on RAM
    const locales = await promisifyReadDir(localePath)
    for (const l of locales) {
      // run builds sequentially to limit RAM usage
      await build(
        configFactory({
          input: `./src/locale/${l}`,
          fileName: `./dist/locale/${l}`,
          name: `dayjs_locale_${formatName(l)}`,
        })
      )
    }

    const plugins = await promisifyReadDir(
      path.join(__dirname, '../src/plugin')
    )
    for (const plugin of plugins) {
      // run builds sequentially to limit RAM usage
      await build(
        configFactory({
          input: `./src/plugin/${plugin}/index`,
          fileName: `./dist/plugin/${plugin}.js`,
          name: `dayjs_plugin_${formatName(plugin)}`,
        })
      )
    }

    build(
      configFactory({
        input: './src/index.js',
        fileName: './dist/index.js',
      })
    )

    await promisify(ncp)('./types/', './dist/')

    // list locales
    await listLocaleJson(locales)
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
