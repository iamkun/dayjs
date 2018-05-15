const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')

module.exports = (config) => {
  const { input, fileName } = config
  return {
    input: {
      input,
      external: [
        'dayjs'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        uglify()
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: 'dayjs',
      globals: {
        dayjs: 'dayjs'
      }
    }
  }
}
