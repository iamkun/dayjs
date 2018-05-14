const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')

module.exports = (config) => {
  const { input, fileName } = config
  return {
    input: {
      input
    },
    output: {
      file: fileName,
      format: 'umd',
      name: 'dayjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  }
}
