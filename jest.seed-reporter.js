const fs = require('fs')
const { gen, sampleOne } = require('testcheck')

class SeedReporter {
  constructor() {
    this.seedFile = '.seed'
    this.failed = false
    this.seed = null
  }

  onRunStart() {
    if (process.env.TEST_SEED != null) {
      this.seed = process.env.TEST_SEED

      return
    }

    const maxTimestamp = 8630000000000000

    try {
      fs.accessSync('.seed')
    } catch (err) {
      if (err.code === 'ENOENT') {
        fs.writeFileSync(
          '.seed',
          sampleOne(gen.intWithin(-maxTimestamp, maxTimestamp))
        )
      } else {
        throw err
      }
    }

    const seed = fs.readFileSync('.seed')

    process.env.TEST_SEED = seed
    this.seed = seed
  }

  onTestResult(_, result) {
    if (result.numFailingTests !== 0) {
      this.failed = true
    }
  }

  onRunComplete() {
    if (this.failed === false) {
      fs.unlinkSync(this.seedFile)
    }

    process.stderr.write(`seed: ${this.seed}\n`)
  }
}

module.exports = SeedReporter
