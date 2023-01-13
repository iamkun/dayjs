import { bench } from 'vitest'
import type { BenchOptions } from 'vitest'

export const defaultBenchmarkOptions: (opts: BenchOptions) => BenchOptions = (
  opts
) => ({
  iterations: 1000,
  ...opts,
})

export const defaultBenchmark = (
  name: string,
  fn: () => void,
  opts: BenchOptions = {}
) => {
  bench(name, fn, defaultBenchmarkOptions(opts))
}
