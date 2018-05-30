const rollup = require('rollup')
const configFactory = require('./rollup.config')
const fs = require('fs')
const util = require('util')
const path = require('path')

const { promisify } = util

const promisifyReadDir = promisify(fs.readdir)

const formatName = n => n.replace(/\.js/, '').replace('-', '_')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

(async () => {
  try {
    const locales = await promisifyReadDir(path.join(__dirname, '../src/locale'))
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
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
