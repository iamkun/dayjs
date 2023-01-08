const fs = require('fs/promises')
const path = require('path')
const util = require('util')

const { promisify } = util

const ncp = promisify(require('ncp'))

const typeFileExt = '.d.ts'
const localeDir = path.join(process.env.PWD, 'esm/locale')
const pluginDir = path.join(process.env.PWD, 'esm/plugin')
const localeTypePath = path.join(process.env.PWD, 'esm/locale', `index${typeFileExt}`)


async function walk(dir, callback) {
  const files = await fs.readdir(dir)

  /* eslint-disable no-restricted-syntax, no-await-in-loop */
  for (const file of files) {
    const filepath = path.join(dir, file)
    const stats = await fs.stat(filepath)
    if (stats.isDirectory()) {
      await walk(filepath, callback)
    } else if (stats.isFile()) {
      await callback(filepath, stats)
    }
  }
}


(async () => {
  try {
    const readLocaleDir = await fs.readdir(localeDir)
    await Promise.all(readLocaleDir.map(l => async () => {
      const filePath = path.join(localeDir, l)
      const readFile = await fs.readFile(filePath, 'utf8')
      const result = readFile.replace("'dayjs'", "'../index'")
      await fs.writeFile(filePath, result, 'utf8')
    })
      .map(f => f()))

    await ncp('./types/', './esm')

    const readLocaleFile = await fs.readFile(localeTypePath, 'utf8')
    const localResult = readLocaleFile.replace("'dayjs", "'dayjs/esm")
    await fs.writeFile(localeTypePath, localResult, 'utf8')

    const readPluginDir = await fs.readdir(pluginDir)

    await Promise.all(readPluginDir.map(p => async () => {
      if (p.includes(typeFileExt)) {
        const pluginName = p.replace(typeFileExt, '')
        const filePath = path.join(pluginDir, p)
        const targetPath = path.join(pluginDir, pluginName, `index${typeFileExt}`)
        const readFile = await fs.readFile(filePath, 'utf8')
        const result = readFile.replace(/'dayjs'/g, '\'dayjs/esm\'')
        await fs.writeFile(targetPath, result, 'utf8')
        await fs.unlink(filePath)
      }
    })
      .map(f => f()))

    await walk('./esm/', async (p) => {
      if (p.endsWith('.js')) {
        await fs.rename(p, p.replace(/\.js$/g, '.mjs'))
      } else if (p.endsWith(typeFileExt)) {
        const content = await fs.readFile(p, 'utf8')
        await fs.writeFile(p, content.replaceAll('export = ', 'export default '))
      }
    })
    await ncp(path.join(__dirname, 'esm-wrapper/'), './esm')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
