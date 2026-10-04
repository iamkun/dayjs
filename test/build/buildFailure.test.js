describe('build failures', () => {
  const originalExitCode = process.exitCode

  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    process.exitCode = originalExitCode
    jest.restoreAllMocks()
  })

  it('sets a failing exit code when a build rejects', async () => {
    const error = new Error('build failed')
    let resolveLoggedError
    const loggedError = new Promise((resolve) => {
      resolveLoggedError = resolve
    })

    jest.doMock('rollup', () => ({
      rollup: () => Promise.reject(error)
    }))
    jest.doMock('../../build/rollup.config', () => config => config)
    jest.doMock('ncp', () => ({ ncp: (source, destination, callback) => callback() }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(null, ['en.js']),
      readFile: (file, encoding, callback) => callback(null, '// English [en]'),
      writeFile: (file, contents, encoding, callback) => callback()
    }))
    jest.spyOn(console, 'error').mockImplementation((receivedError) => {
      expect(receivedError).toBe(error)
      resolveLoggedError()
    })

    require('../../build') // eslint-disable-line global-require

    await loggedError
    expect(process.exitCode).toBe(1)
  })
})
