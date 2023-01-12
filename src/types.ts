import type { Dayjs, extend, isDayjs, locale, unix } from './dayjs'
import type { GetUnit, Unit } from './units'

export type DateInput =
  | Dayjs
  | Date
  | string
  | number
  | number[]
  | null
  | undefined
  | object

export type DateOutput = Date | string | number | number[]
export type FormatOption = string | string[]

export type GetterFn = {
  (value: number): Dayjs
  (): Dayjs | number
}

export type SetterFn = {
  (value: number, unit: Exclude<Unit, GetUnit<'D'>>): Dayjs
  (value: number): Dayjs
}

export type AccessorFn = {
  (value: number, unit: Exclude<Unit, GetUnit<'D'>>): Dayjs
  (value: number): Dayjs
  (): number
}

export interface ParseOptions {
  format?: FormatOption
  locale?: string
  strict?: boolean
}

export interface DayjsFn {
  (
    date?: DateInput,
    format?: FormatOption,
    locale?: boolean,
    strict?: boolean
  ): Dayjs
  (date?: DateInput, format?: FormatOption, strict?: boolean): Dayjs
  isDayjs: typeof isDayjs
  unix: typeof unix
  extend: typeof extend
  locale: typeof locale
}

export type Plugin<T = never> = ((
  cls: typeof Dayjs,
  fn: DayjsFn,
  option?: T
) => void) & {
  /** installed */
  _i?: boolean
}

export type PluginOption<T extends Plugin<any>> = T extends Plugin<infer O>
  ? O
  : T

export interface Extend {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new(): Extend
}
