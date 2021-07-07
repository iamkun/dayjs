/// <reference path="./types.d.ts" />

declare module 'dayjs/esm/locale/*' {
  export namespace locale {
    export interface Locale extends ILocale {}
  }

  export const locale: locale.Locale

  export default locale
}
