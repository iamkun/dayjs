describe('main bundle build ordering', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('finishes the main Rollup build before writing the locale manifest', async () => {
    let resolveRollup
    let resolveManifest
    const manifestWritten = new Promise((resolve) => {
      resolveManifest = resolve
    })
    const writeFile = jest.fn((file, contents, encoding, callback) => {
      callback()
      resolveManifest()
    })

    jest.doMock('rollup', () => ({
      rollup: () => new Promise((resolve) => {
        resolveRollup = () => resolve({ write: () => Promise.resolve() })
      })
    }))
    jest.doMock('../../build/rollup.config', () => config => config)
    jest.doMock('ncp', () => ({ ncp: (source, destination, callback) => callback() }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(null, []),
      readFile: (file, encoding, callback) => callback(null, ''),
      writeFile
    }))

    require('../../build') // eslint-disable-line global-require

    await new Promise(resolve => setImmediate(resolve))
    expect(resolveRollup).toEqual(expect.any(Function))
    expect(writeFile).not.toHaveBeenCalled()

    resolveRollup()
    await manifestWritten
    expect(writeFile).toHaveBeenCalledTimes(1)
  })
})
