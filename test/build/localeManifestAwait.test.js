describe('locale manifest generation', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('reports a locale manifest write failure through the build error handler', async () => {
    const writeError = new Error('locale manifest write failed')
    let rejectWrite
    let reportError
    const errorReported = new Promise((resolve) => {
      reportError = resolve
    })
    const consoleError = jest.spyOn(console, 'error').mockImplementation((error) => {
      reportError(error)
    })

    jest.doMock('rollup', () => ({
      rollup: () => Promise.resolve({ write: () => Promise.resolve() })
    }))
    jest.doMock('../../build/rollup.config', () => config => config)
    jest.doMock('ncp', () => ({ ncp: (source, destination, callback) => callback() }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(null, []),
      readFile: (file, encoding, callback) => callback(null, ''),
      writeFile: (file, contents, encoding, callback) => {
        rejectWrite = () => callback(writeError)
      }
    }))

    require('../../build') // eslint-disable-line global-require

    await new Promise(resolve => setImmediate(resolve))
    expect(rejectWrite).toEqual(expect.any(Function))

    rejectWrite()
    await expect(errorReported).resolves.toBe(writeError)
    expect(consoleError).toHaveBeenCalledTimes(1)
  })
})
