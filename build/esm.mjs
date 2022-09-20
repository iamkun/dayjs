import { rollup } from 'rollup'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import fg from 'fast-glob'
import Alias from '@rollup/plugin-alias'
import NodeResolve from '@rollup/plugin-node-resolve'

const pathRoot = resolve(fileURLToPath(import.meta.url), '../..')
const pathSrc = resolve(pathRoot, 'src');
(async () => {
  const entries = await fg(['index.js', 'locale/*.js', 'plugin/*/*.js'], {
    cwd: pathSrc,
    absolute: true
  })
  const bundle = await rollup({
    input: entries,
    plugins: [
      Alias({
        entries: {
          dayjs: resolve(pathSrc, 'index.js')
        }
      }),
      NodeResolve()
    ]
  })
  await bundle.write({
    dir: resolve(pathRoot, 'dist'),
    entryFileNames(chunk) {
      if (chunk.facadeModuleId) {
        const pluginMatches = chunk.facadeModuleId.match(/src\/plugin\/(.+?)\/index\.js/)
        if (pluginMatches && pluginMatches[1]) {
          return `plugin/${pluginMatches[1]}.mjs`
        }

        if (/src\/locale\/(.+?)\.js/.test(chunk.facadeModuleId)) {
          return 'locale/[name].mjs'
        }
      }

      return '[name].mjs'
    },
    chunkFileNames: '[name].mjs'
  })
})()
