const rollup = require('rollup')
const configFactory = require('./rollup.config')
const fs = require('fs')
const util = require('util')
const path = require('path')
const { ncp } = require('ncp')

const { promisify } = util

const promisifyReadDir = promisify(fs.readdir)
const promisifyReadFile = promisify(fs.readFile)
const promisifyWriteFile = promisify(fs.writeFile)

const localeNameRegex = /\/\/ (.*) \[/
const formatName = n => n.replace(/\.js/, '').replace('-', '_')

const localePath = path.join(__dirname, '../src/locale')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

async function listLocaleJson(localeArr) {
  const localeListArr = []
  await Promise.all(localeArr.map(async (l) => {
    const localeData = await promisifyReadFile(path.join(localePath, l), 'utf-8')
    localeListArr.push({
      key: l.slice(0, -3),
      name: localeData.match(localeNameRegex)[1]
    })
  }))
  promisifyWriteFile(path.join(__dirname, '../locale.json'), JSON.stringify(localeListArr), 'utf8')
}

(async () => {
  try {
    const locales = await promisifyReadDir(localePath)
    locales.forEach((l) => {
      build(configFactory({
        input: `./src/locale/${l}`,
        fileName: `./locale/${l}`,
        name: `dayjs_locale_${formatName(l)}`
      }))
    })

    const plugins = await promisifyReadDir(path.join(__dirname, '../src/plugin'))
    plugins.forEach((l) => {
      build(configFactory({
        input: `./src/plugin/${l}/index`,
        fileName: `./plugin/${l}.js`,
        name: `dayjs_plugin_${formatName(l)}`
      }))
    })

    build(configFactory({
      input: './src/index.js',
      fileName: './dayjs.min.js'
    }))

    await promisify(ncp)('./types/', './')

    // list locales
    await listLocaleJson(locales)
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
