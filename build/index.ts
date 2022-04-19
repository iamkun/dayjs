import path from 'path'
import { build } from 'esbuild'
import glob from 'fast-glob'
import { Project } from 'ts-morph'
import { pascalCase } from './utils'
import type { BuildOptions } from 'esbuild'

const pathRoot = path.resolve(__dirname, '..')
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

async function genDts() {
  const project = new Project({
    compilerOptions: {
      emitDeclarationOnly: true,
    },
    tsConfigFilePath: path.resolve(pathRoot, 'tsconfig.json'),
  })
  await project.emit({ emitOnlyDtsFiles: true })
}

Promise.all([
  buildEntry(true),
  buildEntry(false),
  buildSubModule(false),
  buildSubModule(true),
  genDts(),
])
