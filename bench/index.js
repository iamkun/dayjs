const { exec } = require('child_process')
const { promisify } = require('util')
let { readdir } = require('fs')

const { stdout, stderr } = process
readdir = promisify(readdir)

async function listBenchmarks() {
  const benchmarks = await readdir(__dirname)
  return benchmarks.filter(suite => suite.lastIndexOf('.bench.js') > 0)
}

function runBenchmark(benchmark) {
  return new Promise((resolve, reject) => {
    const child = exec(`node "${benchmark}"`, {
      shell: true,
      cwd: __dirname
    })
    child.stdout.on('data', data => stdout.write(data))
    child.stderr.on('data', data => stderr.write(data))
    child.on('close', (code) => {
      if (code) {
        reject()
      } else {
        resolve()
      }
    })
  })
}

(async function () {
  try {
    const suites = await listBenchmarks()
    for (let i = 0, { length } = suites; i < length; i += 1) {
      await runBenchmark(suites[i]) // eslint-disable-line no-await-in-loop
    }
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    process.exitCode = 1
  }
}())
