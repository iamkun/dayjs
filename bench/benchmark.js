const { Suite } = require('benchmark')

async function start() {
  this.run({ async: true })
  await this.promise
}

function createSuite(description) {
  const suite = new Suite()
  suite.start = start
  let finish
  suite.promise = new Promise(resolve => finish = resolve) // eslint-disable-line no-return-assign
  return suite
    .on('start', () => console.log(description)) // eslint-disable-line no-console
    .on('cycle', ({ target }) => console.log(`  ${target}`)) // eslint-disable-line no-console
    .on('complete', () => {
      console.log(`The fastest one was ${suite.filter('fastest').map('name')}.`) // eslint-disable-line no-console
      console.log() // eslint-disable-line no-console
      finish()
    })
}

async function runSuites(suites) {
  for (let i = 0, { length } = suites; i < length; i += 1) {
    await suites[i].start() // eslint-disable-line no-await-in-loop
  }
}

module.exports = { createSuite, runSuites }
