const rollup = require('rollup')
const configFactory = require('./rollup.config')

// load locale

// load plugin

// core

async function build() {
  const option = configFactory({
    input: './src/index.js',
    fileName: './dayjs.min.js'
  })
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

build()
