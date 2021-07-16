const fs = require('fs')
const path = require('path')
const util = require('util')
const { ncp } = require('ncp')

const { promisify } = util

const localeDir = path.join(__dirname, '../esm/locale');

(async () => {
  try {
    const readLocaleDir = await promisify(fs.readdir)(localeDir)
    readLocaleDir.forEach(async (l) => {
      const filePath = path.join(localeDir, l)
      const readFile = await promisify(fs.readFile)(filePath, 'utf8')
      const result = readFile.replace("'dayjs'", "'../index'")
      await promisify(fs.writeFile)(filePath, result, 'utf8')
    })

    await promisify(ncp)('./types/esm/', './esm')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
