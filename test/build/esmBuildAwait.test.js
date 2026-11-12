const path = require('path')

describe('ESM build post-processing', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('finishes locale rewrites before copying type definitions', async () => {
    let finishLocaleWrite
    const copyTypes = jest.fn((source, destination, callback) => callback())

    jest.doMock('ncp', () => ({ ncp: copyTypes }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(
        null,
        directory.endsWith(path.join('esm', 'locale')) ? ['en.js'] : []
      ),
      readFile: (file, encoding, callback) => callback(null, "import dayjs from 'dayjs'"),
      writeFile: (file, contents, encoding, callback) => {
        if (file.endsWith(path.join('esm', 'locale', 'en.js'))) {
          finishLocaleWrite = callback
        } else {
          callback()
        }
      },
      unlink: (file, callback) => callback()
    }))

    require('../../build/esm') // eslint-disable-line global-require

    await new Promise(resolve => setImmediate(resolve))
    expect(finishLocaleWrite).toEqual(expect.any(Function))
    expect(copyTypes).not.toHaveBeenCalled()

    finishLocaleWrite()
    await new Promise(resolve => setImmediate(resolve))
    expect(copyTypes).toHaveBeenCalledTimes(1)
  })

  it('reports plugin rewrite failures through the build error handler', async () => {
    const writeError = new Error('plugin type write failed')
    let reportError
    const errorReported = new Promise((resolve) => {
      reportError = resolve
    })
    const consoleError = jest.spyOn(console, 'error').mockImplementation((error) => {
      reportError(error)
    })

    jest.doMock('ncp', () => ({ ncp: (source, destination, callback) => callback() }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(
        null,
        directory.endsWith(path.join('esm', 'plugin')) ? ['utc.d.ts'] : []
      ),
      readFile: (file, encoding, callback) => callback(null, "import dayjs from 'dayjs'"),
      writeFile: (file, contents, encoding, callback) => callback(file.endsWith(path.join('esm', 'plugin', 'utc', 'index.d.ts')) ? writeError : null),
      unlink: (file, callback) => callback()
    }))

    require('../../build/esm') // eslint-disable-line global-require

    await expect(errorReported).resolves.toBe(writeError)
    expect(consoleError).toHaveBeenCalledTimes(1)
  })
})
