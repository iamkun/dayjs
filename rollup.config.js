import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import packageInfo from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${packageInfo.name}.min.js`,
    format: 'umd',
    name: 'dayjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};