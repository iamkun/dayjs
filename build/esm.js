const fs = require('fs')
const path = require('path')
const util = require('util')

const { promisify } = util

const localeDir = path.join(process.env.PWD, 'esm/locale');

(async () => {
  try {
    const readLocaleDir = await promisify(fs.readdir)(localeDir)
    readLocaleDir.forEach(async (l) => {
      const filePath = path.join(localeDir, l)
      const readFile = await promisify(fs.readFile)(filePath, 'utf8')
      const result = readFile.replace("'dayjs'", "'../index'")
      await promisify(fs.writeFile)(filePath, result, 'utf8')
    })
  } catch (e) {
    console.error(e)
  }
})()
