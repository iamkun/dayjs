import path from 'path'
import { fileURLToPath } from 'url'
import { readFile, writeFile } from 'fs/promises'
import { build } from 'esbuild'
import glob from 'fast-glob'
import consola from 'consola'
import chalk from 'chalk'
import { minify } from 'terser'
import AST from 'unplugin-ast/esbuild'
import { RemoveWrapperFunction } from 'unplugin-ast/transformers'
import { pascalCase } from './utils.mjs'
import type { BuildOptions } from 'esbuild'

const pathRoot = path.resolve(fileURLToPath(import.meta.url), '../..')
const pathSrc = path.resolve(pathRoot, 'src')
const pathOutput = path.resolve(pathRoot, 'dist')

const target = 'es2019'

const formatFileName = ({
  name,
  suffix = '',
  minify = false,
  ext = 'js',
}: {
  name: string
  suffix?: string
  minify?: boolean
  ext?: string
}) => `${name}${suffix ? `.${suffix}` : ''}${minify ? '.min' : ''}.${ext}`

async function buildEntry(minify: boolean) {
  const options: BuildOptions = {
    entryPoints: [path.resolve(pathSrc, 'index.ts')],
    bundle: true,
    minify,
    target,
    plugins: [AST({ transformer: [RemoveWrapperFunction(['mutable'])] })],
  }

  await Promise.all([
    build({
      ...options,
      outfile: path.resolve(pathOutput, `index${minify ? '.min' : ''}.js`),
      format: 'cjs',
    }),
    build({
      ...options,
      outfile: path.resolve(pathOutput, `index${minify ? '.min' : ''}.mjs`),
      format: 'esm',
    }),
    build({
      ...options,
      outfile: path.resolve(pathOutput, `index.iife${minify ? '.min' : ''}.js`),
      globalName: 'Dayjs',
      format: 'iife',
    }),
  ])
}

async function buildSubModule(minify: boolean) {
  const files = await glob(['locale/*.ts', 'plugin/*.ts', '!locale/index.ts'], {
    cwd: pathSrc,
    absolute: true,
    onlyFiles: false,
  })

  await Promise.all(
    files.map(async (file) => {
      const type = path.relative(pathSrc, path.dirname(file))

      const options: BuildOptions = {
        entryPoints: [file],
        bundle: true,
        minify,
      }

      const dir = path.resolve(pathOutput, type)
      const fileName = path.basename(file, '.ts')

      await Promise.all([
        build({
          ...options,
          format: 'cjs',
          outfile: path.resolve(
            dir,
            formatFileName({ name: fileName, minify })
          ),
        }),
        build({
          ...options,
          format: 'esm',
          outfile: path.resolve(
            dir,
            formatFileName({ name: fileName, minify, ext: 'mjs' })
          ),
        }),
        build({
          ...options,
          format: 'iife',
          outfile: path.resolve(
            dir,
            formatFileName({ name: fileName, suffix: 'iife', minify })
          ),
          globalName: pascalCase(`Dayjs-${type}-${fileName}`),
        }),
      ])
    })
  )
}

async function minifyBundle() {
  const files = await glob(['dist/*.min.?(m)js'], { absolute: true })
  for (const filename of files) {
    const contents = await readFile(filename, 'utf-8')
    const code = await minify(contents, {})
    await writeFile(filename, code.code!, 'utf-8')
  }
}

await Promise.all([
  buildEntry(true),
  buildEntry(false),
  buildSubModule(false),
  buildSubModule(true),
])

await minifyBundle()

consola.success(chalk.green('Build success'))
