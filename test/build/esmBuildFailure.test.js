describe('ESM build failures', () => {
  const originalExitCode = process.exitCode

  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    process.exitCode = originalExitCode
    jest.restoreAllMocks()
  })

  it('sets a failing exit code when post-processing rejects', async () => {
    const error = new Error('post-processing failed')
    let resolveLoggedError
    const loggedError = new Promise((resolve) => {
      resolveLoggedError = resolve
    })

    jest.doMock('ncp', () => ({ ncp: (source, destination, callback) => callback() }))
    jest.doMock('fs', () => ({
      readdir: (directory, callback) => callback(error),
      readFile: (file, encoding, callback) => callback(null, ''),
      writeFile: (file, contents, encoding, callback) => callback(),
      unlink: (file, callback) => callback()
    }))
    jest.spyOn(console, 'error').mockImplementation((receivedError) => {
      expect(receivedError).toBe(error)
      resolveLoggedError()
    })

    require('../../build/esm') // eslint-disable-line global-require

    await loggedError
    expect(process.exitCode).toBe(1)
  })
})
