export const monthOrDayFormat = (format: string) =>
  format.replace(
    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
    (match, group1, group2) => group1 || group2.slice(1)
  )

export const englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A',
}

export const formatToLocalizedFormat = (
  formatStr: string,
  formats: Record<string, string>
) =>
  formatStr.replace(
    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
    (match, group1, group2) => {
      const uppercaseGroup2 = group2 && group2.toUpperCase()
      return (
        group1 ||
        formats[group2] ||
        englishFormats[group2 as keyof object] ||
        monthOrDayFormat(formats[uppercaseGroup2])
      )
    }
  )
