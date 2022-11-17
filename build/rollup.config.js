const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

module.exports = (config) => {
  const {
    input, fileName, name, outputExports
  } = config
  const rollupConfig = {
    input: {
      input,
      external: [
        'dayjs'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**',
          babelHelpers: 'bundled'
        }),
        terser()
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || 'dayjs',
      globals: {
        dayjs: 'dayjs'
      },
      compact: true
    }
  }
  if (outputExports !== undefined) {
    rollupConfig.output.exports = outputExports
  }
  return rollupConfig
}
